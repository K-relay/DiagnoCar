from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.authentication import JWTAuthentication, JWTStatelessUserAuthentication
from rest_framework_simplejwt.tokens import Token
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str,force_str,smart_bytes, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode







class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['username', 'first_name', 'last_name', 'password', 'email', 'phoneNumber']
        extra_kwargs={
            'password':{'write_only':True},
                    }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instanse = self.Meta.model(**validated_data)
        if password is not None:
            instanse.set_password(password)
        instanse.save()
        return instanse

class UserInfoSerializers(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username', 'first_name', 'last_name', 'email', 'phoneNumber', 'isActive']



class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    new_password1= serializers.CharField(required=True)

    def validate(self, attrs):
        if attrs['new_password'] != attrs['new_password1']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs


class RequestResetPasswordEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

    class Meta:
        fields = ['email']

class SetNewPasswordSerializer(serializers.Serializer):

    new_password = serializers.CharField(required=True, write_only=True)
    new_password1 = serializers.CharField(required=True, write_only=True)
    token = serializers.CharField(required=True)
    uidb64 = serializers.CharField(required=True)

    class Meta:
        fields=['new_password', 'new_password1','token','uidb64']


    def validate(self, attrs):
        if attrs['new_password'] != attrs['new_password1']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        else:

            try:
                password = attrs.get('new_password')
                token = attrs.get('token')
                uidb64 = attrs.get('uidb64')

                username = force_str(urlsafe_base64_decode(uidb64))
                user = User.objects.get(username=username)

                if not PasswordResetTokenGenerator().check_token(user, token):
                    raise AuthenticationFailed('the reset link is invalid', 401)
                user.set_password(password)
                user.save()
                return attrs
            except Exception as e:
                raise AuthenticationFailed('the reset link is invalid', 401)
                



        


        



        








# class ChangePasswordSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, required=True)
#     password2 = serializers.CharField(write_only=True, required=True)
#     old_password = serializers.CharField(write_only=True, required=True)



#     class Meta:
#         model=User
#         fields = ('old_password', 'password', 'password2')
        

   
#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError({"password": "Password fields didn't match."})

#         return attrs

#     def validate_old_password(self, value):
#         token_string=str(self.context['request'].auth)
#         access_token = AccessToken(token_string)
#         user=access_token['username']
#         print(user)
#         userobj = User.objects.get(username=user)
#         if not userobj.check_password(value):
#             raise serializers.ValidationError({"old_password": "Old password is not correct"})
#         return value

#     def update(self, instance, validated_data):

#         instance.set_password(instance.password)
#         instance.save()

#         return instance
