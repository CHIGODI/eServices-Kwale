from django.db import models
from base.models import BaseModel
from django.contrib.auth.models import AbstractUser


class User(AbstractUser, BaseModel):
    email = models.EmailField(max_length=128, unique=True, null=False)
    first_name = models.CharField(max_length=60, null=False)
    last_name = models.CharField(max_length=60,null=False)
    id_number = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=20, blank=True, null=False)
    designation = models.CharField(max_length=60, blank=True, null=False)
    phone_number = models.CharField(max_length=20, blank=True, null=False)

    class Meta:
        """Control behavior of the model"""
        db_table = 'users'

    def __str__(self):
        return self.email

