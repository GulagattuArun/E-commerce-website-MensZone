from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token
from django.http import JsonResponse
from .serializers import UserSerializer


@method_decorator(csrf_exempt, name="dispatch")
class User_Signup(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User created successfully"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class User_Login(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return Response(
                {"message": "Login successful"},
                status=status.HTTP_200_OK
            )

        return Response(
            {"error": "Invalid credentials"},
            status=status.HTTP_401_UNAUTHORIZED
        )


class User_Logout(APIView):
    def post(self, request):
        logout(request)
        return Response(
            {"message": "Logged out successfully"},
            status=status.HTTP_200_OK
        )


def get_csrf(request):
    return JsonResponse({"csrfToken": get_token(request)})
