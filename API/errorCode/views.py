from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import codeSerializer,manifactureCodeSerializer, InfoManifactureCodeSerializers

from .models import Code,Manifacture

from rest_framework import status
from .permissions import userHasPermission
from rest_framework.decorators import api_view, permission_classes

# Create your views here.


class codeView(APIView):

    permission_classes = [userHasPermission]

    def get(self, request, code):
        try:
            specificCode = Code.objects.get(pk=code)
        except Code.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        if request.method == 'GET':
            serializer = codeSerializer(specificCode)
            return Response(serializer.data)

    



        


    

    # def post(self, request):

    #     codeMani= InfoManifactureCodeSerializers(data=request.data)
    #     print(request.data)
    #     print(codeMani.data.get('code'))
    #     print(codeMani.data.get('manifacture'))
        

    #     try:
    #         specificCode=Manifacture.objects.filter(code=codeMani.data.get('code'), manifacture=codeMani.data.get('manifacture'))
    #     except Manifacture.DoesNotExist:
    #         return Response(status=status.HTTP_404_NOT_FOUND)

    #     if request.method == 'POST':
    #         serializer=manifactureCodeSerializer(specificCode)
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class manifactureCodeView(APIView):

    permission_classes = [userHasPermission]

    def post(self, request):

        codeMani= InfoManifactureCodeSerializers(data=request.data)
        if codeMani.is_valid():
            try:
                specificCode=Manifacture.objects.filter(code=codeMani.data.get('code'), manifacture=codeMani.data.get('manifacture'))
                
            except Manifacture.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        

        if request.method == 'POST':
            serializer=manifactureCodeSerializer(specificCode, many=True)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

            
        


        










# def ManifactureCodeView(request):

#     codeMani= InfoManifactureCodeSerializers(data=request.data)
#     print(request.data)
#     print(codeMani.data.get('code'))
#     print(codeMani.data.get('manifacture'))

#     try:
#         code=Manifacture.objects.filter(code=codeMani.data.get('code'), manifacture=codeMani.data.get('manifacture'))
#     except Manifacture.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     if request.method == 'POST':
#         serializer=manifactureCodeSerializer(code)
#         return Response(serializer.data)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





# class ManifactureCodeView(APIView):

#     permission_classes = [userHasPermission]

#     def post(self, request):
#         codeMani= InfoManifactureCodeSerializers(data=request.data)
        
   
#         try:
#             code = Manifacture.objects.filter(code=codeMani.data.get('code'),manifacture=codeMani.data.get('manifacture'))
#         except Manifacture.DoesNotExist:
                
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         if request.method == 'POST':
#             serializer = manifactureCodeSerializer(code)
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


            
            
