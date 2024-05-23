from django.db import models

# Create your models here.


class Partners(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    longitude = models.CharField(max_length=100)
    latitude = models.CharField(max_length=100)
    category = models.CharField(max_length=200)
    phoneNumber = models.CharField(max_length=20)
    link = models.TextField()

    def __str__(self):
        return self.title

        
    