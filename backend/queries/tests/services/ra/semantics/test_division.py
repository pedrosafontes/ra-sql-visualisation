from collections.abc import Callable

import pytest
from queries.services.ra.ast import RAQuery, Relation
from queries.services.ra.semantics.errors import (
    DivisionAttributeTypeMismatchError,
    DivisionSchemaCompatibilityError,
)


@pytest.mark.parametrize(
    'query',
    [],
)
def test_valid_division(query: RAQuery, assert_valid: Callable[[RAQuery], None]) -> None:
    assert_valid(query)


@pytest.mark.parametrize(
    'query, expected_exception',
    [
        # Right schema attributes must be subset of left
        (
            Relation('R').divide('S'),
            DivisionSchemaCompatibilityError,
        ),
        # Attribute types must match
        (
            Relation('R').divide('V'),
            DivisionAttributeTypeMismatchError,
        ),
    ],
)
def test_invalid_division(
    query: RAQuery,
    expected_exception: type[Exception],
    assert_invalid: Callable[[RAQuery, type[Exception]], None],
) -> None:
    assert_invalid(query, expected_exception)
