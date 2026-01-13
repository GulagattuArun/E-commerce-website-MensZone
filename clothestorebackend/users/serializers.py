from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password", "email"] 

    def validate(self, data):
        username = data.get('username')
        email = data.get('email')

        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError("Username already exists")

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already exists")

        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data.get("email"),
            password=validated_data["password"]  # AUTOMATICALLY HASHED
        )
        return user
