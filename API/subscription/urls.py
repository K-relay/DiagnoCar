from django.urls import path
from .views import UserPackageView



urlpatterns =[
  
    path('info', UserPackageView.as_view() ),
    

]
