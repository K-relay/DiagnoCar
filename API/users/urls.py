from django.urls import path
from .views import RegisterView, change_password, PasswordTokenCheck, RequestResetPasswordEmail, SetNewPasswordView, UserInfoView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('info/', UserInfoView.as_view(), name='account_info'),
    path('register/', RegisterView.as_view()),
    path('change_password/', change_password),
    path('password_reset/<uidb64>/<token>/', PasswordTokenCheck.as_view(), name='password-reset-confirm'),
    path('request-reset-email/', RequestResetPasswordEmail.as_view(), name='request-reset-email'),
    path('request-reset-complete/', SetNewPasswordView.as_view(), name='request-reset-complete'),
    
]