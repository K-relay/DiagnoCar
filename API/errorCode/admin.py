from django.contrib import admin

from .models import Code,Manifacture,Category

# Register your models here.


admin.site.register(Code)
admin.site.register(Category)
admin.site.register(Manifacture)


