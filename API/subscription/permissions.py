from rest_framework.permissions import BasePermission
from rest_framework_simplejwt.tokens import AccessToken
from users.models import User



class SuperUserPermission(BasePermission):

    def has_permission(self, request, view):

        
        token_srt=str(request.auth)
        access_token = AccessToken(token_srt)
        user=access_token['username']
        query=User.objects.filter(username=user).values()
        if query[0]['is_superuser'] == True:
            return True
        else:
            return False