from queries.serializers import (
    QueryExecutionSerializer,
    QuerySerializer,
)


def test_query_serializer_allows_blank_sql_text() -> None:
    data = {
        'name': 'Example Query',
        'sql_text': '',
    }
    serializer = QuerySerializer(data=data)
    serializer.is_valid(raise_exception=True)
    assert serializer.validated_data['sql_text'] == ''

def test_query_serializer_allows_blank_ra_text() -> None:
    data = {
        'name': 'Example Query',
        'ra_text': '',
    }
    serializer = QuerySerializer(data=data)
    serializer.is_valid(raise_exception=True)
    assert serializer.validated_data['ra_text'] == ''


def test_query_execution_serializer_valid_data() -> None:
    data = {
        'success': True,
        'results': {
            'columns': ['id', 'name'],
            'rows': [['1', 'Alice'], ['2', 'Bob']],
        },
    }
    serializer = QueryExecutionSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    assert serializer.validated_data['success'] is True
    assert len(serializer.validated_data['results']['rows']) == 2
