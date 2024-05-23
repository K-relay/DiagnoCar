from users.models import User
from .models import UserPackage

import datetime


def deactivateUser():

    for each in UserPackage.objects.all():

        if datetime.datetime.now().date() > each.expire_date:
            username = each.username
            User.objects.filter(username=username).update(isActive=False)
            each.delete()
            



