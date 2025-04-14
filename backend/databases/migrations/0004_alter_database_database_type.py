# Generated by Django 5.1.7 on 2025-04-12 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0003_database_created_database_modified'),
    ]

    operations = [
        migrations.AlterField(
            model_name='database',
            name='database_type',
            field=models.CharField(choices=[('postgresql', 'PostgreSQL')], default='postgresql', max_length=16),
        ),
    ]
