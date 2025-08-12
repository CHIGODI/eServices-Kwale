"""
User model definition.

Extends Django's AbstractUser with additional profile fields.
"""
from django.db import models
from base.models import BaseModel
from django.contrib.auth.models import AbstractUser


class User(AbstractUser, BaseModel):
    """Custom user with extra fields."""
    email = models.EmailField(max_length=128, unique=True)
    first_name = models.CharField(max_length=60, blank=True, null=False, default='')
    last_name = models.CharField(max_length=60, blank=True, null=False, default='')
    id_number = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=20, blank=True, null=False, default='')
    designation = models.CharField(max_length=60, blank=True, null=False, default='')
    phone_number = models.CharField(max_length=20, blank=True, null=False, default='')

    # Email verification fields
    is_email_verified = models.BooleanField(default=False)

    class Meta:
        """Control behavior of the model"""
        db_table = 'users'

    def __str__(self):
        """Return email as string representation."""
        return self.email
