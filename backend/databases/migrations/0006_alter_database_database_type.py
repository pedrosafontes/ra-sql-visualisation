# Generated by Django 5.1.7 on 2025-04-09 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('databases', '0005_rename_type_database_database_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='database',
            name='database_type',
            field=models.CharField(choices=[('postgresql', 'PostgreSQL')], default='postgresql', max_length=255),
        ),
    ]
