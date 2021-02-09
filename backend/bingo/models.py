from django.db import models
from django.utils import timezone

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=120, help_text="Title of the book")
    author = models.CharField(max_length=120, help_text="Author of the book")
    complete = models.BooleanField(default=False, help_text="Field to control completeness of book")
    percentComplete = models.IntegerField(help_text="Value between 1-100 to indicate percentage complete")
    hardMode = models.BooleanField(default=False, help_text="Indicates whether or not this book is for HardMode")
    created = models.DateField(auto_now=True, help_text="Date book was added to card")

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=120, help_text="Name of the category")
    year = models.IntegerField(help_text="Year the category is for")
    description = models.TextField(help_text="Description from /r/Fantasy official card")
    hardmodeDescription = models.TextField(help_text="Description from /r/Fantasy official card for HardMode")

    def __str__(self):
        return self.name

class Square(models.Model):
    locationX = models.IntegerField()
    locationY = models.IntegerField()
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)
    bookId = models.ForeignKey(Book, on_delete=models.CASCADE)

    def __str__(self):
        selfDescribe = str(self.locationX) + ", " + str(self.locationY)
        return selfDescribe