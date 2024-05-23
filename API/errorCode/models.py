from django.db import models

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=150)

    def __str__(self):
        return self.title


class Code(models.Model):
    code = models.CharField(max_length=10, primary_key=True)
    description = models.CharField(max_length=500)
    category= models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.code

class Manifacture(models.Model):
    code = models.CharField(max_length=10)
    description = models.CharField(max_length=500)
    manifacture = models.CharField(max_length=70)
    category= models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.code+" "+self.manifacture
    
    



