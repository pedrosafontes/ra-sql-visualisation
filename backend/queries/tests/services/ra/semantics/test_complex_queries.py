import pytest
from queries.services.ra.parser.ast import (
    Attribute,
    BinaryBooleanExpression,
    BinaryBooleanOperator,
    Comparison,
    ComparisonOperator,
    Projection,
    RAQuery,
    Relation,
    Selection,
)
from queries.services.ra.semantics.analyzer import RASemanticAnalyzer
from queries.services.types import RelationalSchema


@pytest.mark.parametrize(
    'query',
    [
        Projection(
            attributes=[
                Attribute('name'),
                Attribute('salary'),
            ],
            subquery=Selection(
                condition=BinaryBooleanExpression(
                    operator=BinaryBooleanOperator.AND,
                    left=Comparison(
                        operator=ComparisonOperator.EQUAL,
                        left=Attribute('department'),
                        right='IT',
                    ),
                    right=Comparison(
                        operator=ComparisonOperator.GREATER_THAN,
                        left=Attribute('salary'),
                        right=50000,
                    ),
                ),
                subquery=Relation('Employee'),
            ),
        ),
    ],
)
def test_valid_complex_queries(query: RAQuery, schema: RelationalSchema) -> None:
    analyzer = RASemanticAnalyzer(schema)
    analyzer.validate(query)
