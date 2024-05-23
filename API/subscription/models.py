from django.db import models

# Create your models here.


class Package(models.Model):
    title = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.title

class UserPackage(models.Model):
    username = models.CharField(max_length=200, primary_key=True)
    package= models.ForeignKey(Package, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now_add=True)
    expire_date = models.DateField()

    def __str__(self):
        return self.username

    

