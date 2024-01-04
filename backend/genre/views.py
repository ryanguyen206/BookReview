from django.shortcuts import render
from rest_framework import generics
from book.models import Genre
from .serializer import GenreSerializer
from rest_framework.response import Response

# Create your views here.
class GenreListAPIView(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    
    def list(self, request, *args, **kwargs):
        print(request)
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data

        genre_names = [item['genre'] for item in data]

        return Response(genre_names)