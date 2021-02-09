from rest_framework import serializers
from .models import Book, Category, Square

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'complete', 'percentComplete', 'hardMode', 'created')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'year', 'description', 'hardmodeDescription')

class SquareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Square
        fields = ('id', 'locationX', 'locationY', 'categoryId', 'bookId')