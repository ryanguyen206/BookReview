from django.urls import path
from . import views

urlpatterns = [
    path('', views.BookReviewListOrCreateView.as_view(), name='book_review-list'),
    path('<int:pk>/', views.OneBookReviewAPIView.as_view(), name='book_review-detail')
]