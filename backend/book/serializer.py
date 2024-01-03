from rest_framework import serializers
from .models import BookReview

class BookReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookReview
        fields = [
            'creator',
            'genre',
            'participants',
            'book_title',
            'review_title',
            'body',
            'created'
        ]