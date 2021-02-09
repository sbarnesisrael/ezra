from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookSerializer, CategorySerializer, SquareSerializer
from .models import Book, Category, Square

# Create your views here.
class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class SquareView(viewsets.ModelViewSet):
    serializer_class = SquareSerializer
    queryset = Square.objects.all()