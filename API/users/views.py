from django.shortcuts import render
from .serializers import UserSerializer, ChangePasswordSerializer, RequestResetPasswordEmailSerializer, SetNewPasswordSerializer, UserInfoSerializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import generics
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str,force_str,smart_bytes, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util


# Create your views here.


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class RequestResetPasswordEmail(generics.GenericAPIView):
    serializer_class = RequestResetPasswordEmailSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        email = request.data['email']
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.username))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site=get_current_site(request=request).domain
            relativeLink = reverse('password-reset-confirm', kwargs={'uidb64':uidb64 , 'token':token})
            absurl = 'http://'+current_site+relativeLink
            email_body= 'Hello \n Use this link to reset your password \n'+ absurl
            data = {'email_body':email_body, 'to_email':user.email, 'email_subject':'Reset Your Password'}
            Util.send_email(data)
            return Response({'success':'we have sent you an email to reset your password'}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'we could not find your email'}, status=status.HTTP_404_NOT_FOUND)


class PasswordTokenCheck(generics.GenericAPIView):
    def get(self, request, uidb64, token):

        try:
            username = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(username=username)

            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'error':'token is not valid please request a new one'},status=status.HTTP_401_UNAUTHORIZED)
            
            return Response({'success':True , 'massage':'Credential is valid' , 'uidb64':uidb64 , 'token': token}, status=status.HTTP_200_OK)
        
        except DjangoUnicodeDecodeError as identifier:
            return Response({'error':'token is not valid please request a new one'},status=status.HTTP_401_UNAUTHORIZED)


class SetNewPasswordView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success':True, 'message':'password reset successed'}, status=status.HTTP_200_OK)


        


class UserInfoView(APIView):

    def get(self, request):
        token_string=str(request.auth)
        access_token = AccessToken(token_string)
        user=access_token['username']
        userobj = User.objects.get(username=user)
        serializer = UserInfoSerializers(userobj)
        return Response(serializer.data)
        

        

@api_view(['POST'])
def change_password(request):
    if request.method == 'POST':
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            token_string=str(request.auth)
            access_token = AccessToken(token_string)
            user=access_token['username']
            userobj = User.objects.get(username=user)
            if userobj.check_password(serializer.data.get('old_password')):
                userobj.set_password(serializer.data.get('new_password'))
                userobj.save()
                return Response({'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)
            return Response({'error': 'Incorrect old password.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


