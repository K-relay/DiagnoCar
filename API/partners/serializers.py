from rest_framework import serializers
from .models import Partners

class PartnersSerializer(serializers.ModelSerializer):

    class Meta:
        model=Partners
        fields=['title', 'description', 'location', 'longitude', 'latitude', 'category', 'phoneNumber', 'link']