from django.contrib import admin
from .models import Package, UserPackage

# Register your models here.
admin.site.register(Package)
admin.site.register(UserPackage)