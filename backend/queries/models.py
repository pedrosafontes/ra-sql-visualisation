from django.db import models

from common.models import IndexedTimeStampedModel
from databases.services.execution import execute_sql
from databases.types import QueryExecutionResult
from databases.utils.conversion import from_model
from projects.models import Project
from queries.types import QueryError, QueryValidationResult

from .services.validation import validate_sql


class Query(IndexedTimeStampedModel):
    class QueryLanguage(models.TextChoices):
        SQL = 'sql', 'SQL'
        RA = 'ra', 'Relational Algebra'

    name = models.CharField(max_length=255)
    sql_text = models.TextField(blank=True, default='')
    ra_text = models.TextField(blank=True, default='')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='queries')
    language = models.CharField(
        max_length=16,
        choices=QueryLanguage,
        default=QueryLanguage.SQL,
    )

    def execute(self) -> QueryExecutionResult:
        return execute_sql(self.sql_text, from_model(self.project.database))

    def validate(self) -> QueryValidationResult:
        return validate_sql(self.sql_text, from_model(self.project.database))

    @property
    def validation_errors(self) -> list[QueryError]:
        return self.validate().get('errors', [])

    class Meta:
        ordering = [  # noqa: RUF012
            '-modified'
        ]

    objects: models.Manager['Query']
