from django.db import models

# Create your models here.

class Notefication(models.Model):
    text = models.CharField(max_length=500)
    link = models.TextField()
