from django.shortcuts import render
from .pagination import StandardResultsSetPagination
from rest_framework import generics
from .serializers import NotificationSerializer
from .models import Notefication
from rest_framework.response import Response


# Create your views here.

class NotificationView(generics.ListAPIView):
    queryset = Notefication.objects.all()
    serializer_class = NotificationSerializer
    pagination_class = StandardResultsSetPagination

    def get(self, request):
        queryset = self.get_queryset()
        page = self.request.query_params.get('page')
        if page is not None:
            paginate_queryset = self.paginate_queryset(queryset)
            serializer = self.serializer_class(paginate_queryset, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)



