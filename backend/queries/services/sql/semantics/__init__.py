from queries.services.types import RelationalSchema, SQLQuery
from queries.types import QueryError

from ..scope.builder import build_scope
from .errors.base import SQLSemanticError
from .query import validate_query


def validate_sql_semantics(query: SQLQuery, schema: RelationalSchema) -> list[QueryError]:
    try:
        SQLSemanticValidator(schema).validate(query)
    except SQLSemanticError as e:
        semantic_error: QueryError = {'title': e.title}
        if e.description:
            semantic_error['description'] = e.description
        if e.hint:
            semantic_error['hint'] = e.hint
        return [semantic_error]

    return []


class SQLSemanticValidator:
    def __init__(self, schema: RelationalSchema):
        self.schema = schema

    def validate(self, query: SQLQuery) -> None:
        scope = build_scope(query, self.schema)
        validate_query(scope)
