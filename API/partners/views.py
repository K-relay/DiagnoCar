from django.shortcuts import render
from .models import Partners
from .serializers import PartnersSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class PartnersListView(APIView):
    def get(self, request):
        allPartners = Partners.objects.all()
        serializer = PartnersSerializer(allPartners, many=True)
        return Response(serializer.data)

