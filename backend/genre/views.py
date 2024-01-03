from django.shortcuts import render
from rest_framework import generics
from book.models import Genre
from .serializer import GenreSerializer

# Create your views here.
class GenreListAPIView(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer