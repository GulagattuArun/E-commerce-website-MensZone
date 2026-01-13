from django.urls import path
from .views import User_Login, User_Signup, User_Logout, get_csrf

urlpatterns = [
    path("csrf/", get_csrf, name="get-csrf"),
    path("login/", User_Login.as_view(), name="user-login"),
    path("signup/", User_Signup.as_view(), name="user-signup"),
    path("logout/", User_Logout.as_view(), name="user-logout"),
]
