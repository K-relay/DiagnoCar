from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=300)
    paragraph = models.TextField()
    image = models.ImageField(upload_to='postcover', default=False)
    time= models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
