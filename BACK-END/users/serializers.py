"""
User serializers module.

Defines serializers for the User model, handling input validation
and output formatting for API endpoints.
"""

from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the User model.
    The password field is write-only to prevent exposure in API responses.
    """
    password = serializers.CharField(write_only=True)

    class Meta:
        """
        Meta options for UserSerializer.
        """
        model = User
        fields = ['first_name', 'last_name', 'email', 'password',
                  'id_number', 'phone_number', 'username',
                ]
        read_only_fields = ('id', 'created_at', 'updated_at')
