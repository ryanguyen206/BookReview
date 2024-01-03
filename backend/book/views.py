from django.shortcuts import render
from rest_framework import generics
from .models import BookReview
from .serializer import BookReviewSerializer

class OneBookReviewAPIView(generics.RetrieveAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer
    
    
class BookReviewListOrCreateView(generics.ListCreateAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

    
    