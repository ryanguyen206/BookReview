from django.shortcuts import render
from rest_framework import generics
from .models import BookReview, Genre
from .serializer import BookReviewSerializer, GenreSerializer
from rest_framework.response import Response

#Book
class OneBookReviewAPIView(generics.RetrieveAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer
    
    
class BookReviewListOrCreateView(generics.ListCreateAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer
    
    
class BookReviewUpdateView(generics.UpdateAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer
    lookup_field = 'pk'
    

class BookReviewDestroyView(generics.DestroyAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

     
# Genre
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
    