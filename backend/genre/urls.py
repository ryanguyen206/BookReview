from django.urls import path
from . import views

urlpatterns = [
    path('', views.GenreListAPIView.as_view(), name='genre'),
]