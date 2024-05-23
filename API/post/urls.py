from django.urls import path
from .views import PostListView, PostSpeListView
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    
    path('list', PostListView.as_view(), name="post-list" ),
    path('postnum/<int:id>', PostSpeListView.as_view(), name="post-list" ),
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)