from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/<str:pk>', views.getNote, name="note"),
    path('notes-post/', views.post_data, name="post-data"),
]
