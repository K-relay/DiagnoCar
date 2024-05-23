from rest_framework import serializers
from .models import Notefication



class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notefication
        fields=['text', 'link']


