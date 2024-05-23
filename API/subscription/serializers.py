from rest_framework import serializers
from .models import UserPackage


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPackage
        fields=['username','package','start_date', 'expire_date']


