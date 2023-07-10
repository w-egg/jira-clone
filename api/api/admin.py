from django.contrib import admin
from .models import Category, Profile, Task

admin.site.register(Category)
admin.site.register(Task)
admin.site.register(Profile)
