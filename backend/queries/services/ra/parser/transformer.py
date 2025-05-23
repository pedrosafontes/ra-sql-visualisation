from typing import Any, cast

from lark import Token, Transformer, Tree

from .ast import (
    Aggregation,
    AggregationFunction,
    Attribute,
    BinaryBooleanExpression,
    BinaryBooleanOperator,
    BooleanExpression,
    Comparison,
    ComparisonOperator,
    ComparisonValue,
    Division,
    GroupedAggregation,
    Join,
    JoinOperator,
    NotExpression,
    Projection,
    RAQuery,
    Relation,
    Selection,
    SetOperation,
    SetOperator,
    ThetaJoin,
    TopN,
)


class RATransformer(Transformer[Relation, RAQuery]):
    def _transform_tree(self, tree: Tree[Relation]) -> RAQuery:
        node = super()._transform_tree(tree)  # type: ignore[no-untyped-call]
        if isinstance(node, RAQuery):
            node.position = {
                'line': tree.meta.line,
                'start_col': tree.meta.column,
                'end_col': tree.meta.end_column,
            }
        return cast(RAQuery, node)

    def relation(self, args: list[str]) -> Relation:
        return Relation(name=self._identifier(args[0]))

    def attribute(self, args: tuple[str] | tuple[Relation, str]) -> Attribute:  # type: ignore[return]
        match args:
            case (Relation() as relation, str() as identifier):
                name = self._identifier(identifier)
                return Attribute(name=name, relation=relation.name)
            case (str() as identifier,):
                name = self._identifier(identifier)
                return Attribute(name=name)

    def _identifier(self, ident: str) -> str:
        return ident.replace('\\', '')

    def projection(self, args: tuple[list[Attribute], RAQuery]) -> Projection:
        attrs, query = args
        return Projection(attributes=attrs, subquery=query)

    def selection(self, args: tuple[BooleanExpression, RAQuery]) -> Selection:
        condition, query = args
        return Selection(condition=condition, subquery=query)

    def grouped_aggregation(
        self, args: tuple[list[Attribute], list[Aggregation], RAQuery]
    ) -> GroupedAggregation:
        group_by, aggregations, query = args
        return GroupedAggregation(group_by=group_by, aggregations=aggregations, subquery=query)

    def aggregation(self, args: tuple[Attribute, AggregationFunction, Attribute]) -> Aggregation:
        return Aggregation(
            input=args[0],
            aggregation_function=args[1],
            output=args[2].name,
        )

    def count(self, _: tuple[()]) -> AggregationFunction:
        return AggregationFunction.COUNT

    def sum(self, _: tuple[()]) -> AggregationFunction:
        return AggregationFunction.SUM

    def avg(self, _: tuple[()]) -> AggregationFunction:
        return AggregationFunction.AVG

    def min(self, _: tuple[()]) -> AggregationFunction:
        return AggregationFunction.MIN

    def max(self, _: tuple[()]) -> AggregationFunction:
        return AggregationFunction.MAX

    def topn(self, args: tuple[Token, Attribute, RAQuery]) -> TopN:
        limit, attr, query = args
        return TopN(limit=int(limit), attribute=attr, subquery=query)

    def union(self, args: tuple[RAQuery, RAQuery]) -> SetOperation:
        return SetOperation(operator=SetOperator.UNION, left=args[0], right=args[1])

    def difference(self, args: tuple[RAQuery, RAQuery]) -> SetOperation:
        return SetOperation(operator=SetOperator.DIFFERENCE, left=args[0], right=args[1])

    def intersection(self, args: tuple[RAQuery, RAQuery]) -> SetOperation:
        return SetOperation(operator=SetOperator.INTERSECT, left=args[0], right=args[1])

    def cartesian(self, args: tuple[RAQuery, RAQuery]) -> SetOperation:
        return SetOperation(operator=SetOperator.CARTESIAN, left=args[0], right=args[1])

    def natural_join(self, args: tuple[RAQuery, RAQuery]) -> Join:
        return Join(operator=JoinOperator.NATURAL, left=args[0], right=args[1])

    def semi_join(self, args: tuple[RAQuery, RAQuery]) -> Join:
        return Join(operator=JoinOperator.SEMI, left=args[0], right=args[1])

    def theta_join(self, args: tuple[RAQuery, BooleanExpression, RAQuery]) -> ThetaJoin:
        left, condition, right = args
        return ThetaJoin(left=left, right=right, condition=condition)

    def division(self, args: tuple[RAQuery, RAQuery]) -> Division:
        return Division(dividend=args[0], divisor=args[1])

    def and_(self, args: tuple[BooleanExpression, BooleanExpression]) -> BinaryBooleanExpression:
        left, right = args
        return BinaryBooleanExpression(operator=BinaryBooleanOperator.AND, left=left, right=right)

    def or_(self, args: tuple[BooleanExpression, BooleanExpression]) -> BinaryBooleanExpression:
        left, right = args
        return BinaryBooleanExpression(operator=BinaryBooleanOperator.OR, left=left, right=right)

    def not_(self, args: tuple[BooleanExpression]) -> NotExpression:
        return NotExpression(expression=args[0])

    def comparison(
        self, args: tuple[ComparisonValue, ComparisonOperator, ComparisonValue]
    ) -> Comparison:
        return Comparison(left=args[0], operator=args[1], right=args[2])

    def eq(self, _: tuple[()]) -> ComparisonOperator:
        return ComparisonOperator.EQUAL

    def neq(self, _: tuple[()]) -> ComparisonOperator:
        return ComparisonOperator.NOT_EQUAL

    def lt(self, _: tuple[()]) -> ComparisonOperator:
        return ComparisonOperator.LESS_THAN

    def leq(self, _: tuple[()]) -> ComparisonOperator:
        return ComparisonOperator.LESS_THAN_EQUAL

    def gt(self, _: tuple[()]) -> ComparisonOperator:
        return ComparisonOperator.GREATER_THAN

    def geq(self, _: tuple[()]) -> ComparisonOperator:
        return ComparisonOperator.GREATER_THAN_EQUAL

    def int(self, args: list[Token]) -> int:
        return int(args[0])

    def float(self, args: list[Token]) -> float:
        return float(args[0])

    def string(self, args: list[Token]) -> str:
        return args[0]

    def item_list(self, args: list[Any]) -> list[Any]:
        return args

    def query(self, args: tuple[RAQuery]) -> RAQuery:
        return args[0]

    def subquery(self, args: tuple[RAQuery]) -> RAQuery:
        return args[0]

    def IDENT(self, token: Token) -> str:  # noqa: N802
        return str(token.value)

    def CNAME(self, token: Token) -> str:  # noqa: N802
        return str(token.value)

    def ESCAPED_STRING(self, token: Token) -> str:  # noqa: N802
        return str(token.value)[1:-1]  # strip quotes
