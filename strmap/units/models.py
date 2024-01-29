from django.db import models

class Unit(models.Model):
    id = models.BigAutoField(primary_key=True, db_column="unit_id")
    address = models.TextField(max_length=250)

