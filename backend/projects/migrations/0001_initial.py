# Generated by Django 5.1.7 on 2025-04-04 20:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('databases', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('database', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='databases.database')),
            ],
        ),
    ]
