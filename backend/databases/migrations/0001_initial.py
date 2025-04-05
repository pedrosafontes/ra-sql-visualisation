# Generated by Django 5.1.7 on 2025-04-04 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Database',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('host', models.CharField(max_length=255)),
                ('port', models.IntegerField()),
                ('username', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('database_name', models.CharField(max_length=255)),
                ('type', models.CharField(choices=[('postgresql', 'PostgreSQL'), ('mysql', 'MySQL'), ('sqlite', 'SQLite')], default='postgresql')),
            ],
        ),
    ]
