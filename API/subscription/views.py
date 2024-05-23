from django.shortcuts import render
from .serializers import SubscriptionSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework import status
from .models import UserPackage


class UserPackageView(APIView):

    def get(self, request):
        token_string=str(request.auth)
        access_token = AccessToken(token_string)
        user=access_token['username']
        packageUserobj = UserPackage.objects.get(username=user)
        serializer = SubscriptionSerializer(packageUserobj)
        return Response(serializer.data)
# Create your views here.

# @api_view(['POST'])
# @permission_classes([SuperUserPermission])
# def activateUser(request):
#     serializer = UserSubSerializer(data=request.data)
#     if serializer.is_valid():
#         username = serializer.data.get('username')
#         User.objects.filter(username=username).update(isActive=True)
#         return Response({'message': 'the user has been activated!'}, status=status.HTTP_200_OK)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# @permission_classes([SuperUserPermission])
# def deactivateUser(request):
#     serializer = UserSubSerializer(data=request.data)
#     if serializer.is_valid():
#         username = serializer.data.get('username')
#         User.objects.filter(username=username).update(isActive=False)
#         return Response({'message': 'the user has been deactivated!'}, status=status.HTTP_200_OK)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



