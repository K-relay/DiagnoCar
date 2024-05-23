from rest_framework import serializers
from .models import Code, Manifacture


class codeSerializer (serializers.ModelSerializer):

    class Meta:
        model = Code
        fields = ['code', 'description', 'category']

class manifactureCodeSerializer(serializers.ModelSerializer):

    class Meta:
        model= Manifacture
        fields=['code', 'description', 'category', 'manifacture']

class InfoManifactureCodeSerializers(serializers.Serializer):
    code = serializers.CharField(required=True)
    manifacture = serializers.CharField(required=True)