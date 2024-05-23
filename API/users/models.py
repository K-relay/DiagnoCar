from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.


class User(AbstractUser):
    username = models.CharField(max_length=200, primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    phoneNumber   = models.CharField(max_length=30, unique=True)
    isActive     = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'

