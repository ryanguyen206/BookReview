from rest_framework import serializers
from .models import BookReview


        
class BookReviewSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='creator.username', read_only=True)
    genre_name = serializers.CharField(source='genre.genre', read_only=True)

    class Meta:
        model = BookReview
        fields = [
            'pk',
            'creator',
            'genre',
            'genre_name',
            'user_name',
            'participants',
            'book_title',
            'review_title',
            'body',
            'created'
        ]
        
        
 
