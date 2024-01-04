from rest_framework import serializers
from .models import BookReview, Genre



        
class BookReviewSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='creator.username', read_only=True)
    genre_name = serializers.CharField(source='genre.genre', read_only=True)

    class Meta:
        model = BookReview
        fields = [
            'id',
            'creator',
            'genre',
            'genre_name',
            'username',
            'participants',
            'book_title',
            'review_title',
            'body',
            'created'
        ]
        
        
 
