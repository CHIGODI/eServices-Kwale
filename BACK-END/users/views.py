"""
User management views.

This module contains API views for user operations including creating, listing,
retrieving, updating, and deleting users. All views handle password hashing
automatically and provide RESTful endpoints for user management.
"""
from .models import User
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class UserListCreateView(generics.ListCreateAPIView):
    """
    API view for listing and creating users.

    Provides endpoints for:
    - GET: List all users
    - POST: Create a new user with automatic password hashing

    The create method ensures passwords are properly hashed using Django's
    built-in password hashing mechanisms.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Hash the password here explicitly
        user = serializer.save()
        user.set_password(request.data.get('password'))
        user.save()

        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)


class UserDetailView(APIView):
    """
    API view for individual user operations.

    Provides endpoints for:
    - GET: Retrieve a specific user by ID
    - PUT: Update a specific user (with password hashing if provided)
    - DELETE: Delete a specific user

    All methods use user_id as the lookup parameter and handle 404 errors
    gracefully with appropriate error responses.
    """

    def get(self, request, user_id):
        user = get_object_or_404(User, pk=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, user_id):
        user = get_object_or_404(User, pk=user_id)
        serializer = UserSerializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        if 'password' in request.data:
            user.set_password(request.data['password'])
            user.save()

        serializer.save()
        return Response(serializer.data)

    def delete(self, request, user_id):
        user = get_object_or_404(User, pk=user_id)
        user.delete()
        return Response(status=status.HTTP_200_OK)
