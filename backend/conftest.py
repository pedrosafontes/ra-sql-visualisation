from collections.abc import Generator
from unittest.mock import MagicMock, patch

import pytest
from model_bakery import baker
from rest_framework.test import APIClient
from users.models import User


@pytest.fixture
def user() -> User:
    user = baker.make(User, email='user@email.com')
    user.set_password('123456')
    user.save()
    return user


@pytest.fixture
def auth_client(user: User) -> APIClient:
    client = APIClient()
    client.login(email=user.email, password='123456')
    return client


@pytest.fixture
def unauth_client() -> APIClient:
    return APIClient()


@pytest.fixture(autouse=True)
def mock_get_schema() -> Generator[MagicMock, None, None]:
    with patch('databases.services.schema.get_schema') as mock:
        mock.return_value = {
            'users': {
                'id': {
                    'type': 'INTEGER',
                    'nullable': False,
                    'primary_key': True,
                    'references': None,
                }
            }
        }
        yield mock
