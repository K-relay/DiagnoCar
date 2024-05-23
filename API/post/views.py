from django.shortcuts import render
from .models import Post
from .serializers import PostSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class PostListView(APIView):
    def get(self, request):
        allPosts = Post.objects.all()
        serializer = PostSerializers(allPosts, many=True)
        return Response(serializer.data)


class PostSpeListView(APIView):


    def get(self, request, id):
        post=Post.objects.get(pk=id)
        serializer = PostSerializers(post)
        return Response(serializer.data)