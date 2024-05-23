from django.urls import path
from .views import codeView, manifactureCodeView



urlpatterns =[
  
    path('<str:code>', codeView.as_view() ),
    path('manifacture/',manifactureCodeView.as_view())
    

]