from django.urls import reverse

import pytest
from databases.models import Database
from rest_framework.test import APIClient


@pytest.fixture
def mock_db() -> Database:
    return Database.objects.create(
        name='Test',
        description='This is the Test DB.',
        host='localhost',
        port=5432,
        user='test',
        password='secret',
        database_name='test_db',
    )


@pytest.mark.django_db
def test_list_databases(auth_client: APIClient, mock_db: Database) -> None:
    url = reverse('databases-list')
    response = auth_client.get(url)

    assert response.status_code == 200
    data = response.json()

    assert len(data) == 1

    db_data = data[0]
    expected_fields = ['id', 'name']
    for field in expected_fields:
        assert field in db_data
