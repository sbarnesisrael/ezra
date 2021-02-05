from django.db import models
from django.utils import timezone

# Create your models here.
class Square(models.Model):
    locationX = models.IntegerField()
    locationY = models.IntegerField()
    categoryId = models.ForeignKey(models.Category)
    bookId = models.ForeignKey(models.Book)

    def __str__(self):
        selfDescribe = str(self.locationX) + ", " + str(self.locationY)
        return selfDescribe

class Book(models.Model):
    title = models.CharField(max_length=120)
    author = models.CharField(max_length=120)
    complete = models.BooleanField(default=False)
    percentComplete = models.IntegerField()
    created = models.DateField(default=timezone.now())
    markedComplete = models.BooleanField(default=False)
    hardMode = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=120)
    year = models.IntegerField()
    description = models.TextField()
    hardmodeDescription = models.TextField()

    def __str__(self):
        return self.name