from django.urls import path
from .views import PartnersListView


urlpatterns = [
    
    path('', PartnersListView.as_view(), name="Partner-List" ),
    
    
]