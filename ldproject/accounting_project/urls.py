from django.urls import path
from . import views 
from . views import Notelist, NotelistDetails

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    path('search/<str:pk>/', views.get_notesQuery, name="list-notes"),
    path('search/', NotelistDetails.as_view(), name="detailsnotes"),
    path('posts/<str:pk>/', Notelist.as_view(), name='listnote'),
    path('notes/<str:pk>/update', views.updateNote, name="update-note"),
    path('note/<str:pk>/delete', views.deleteNote, name="delete-note"),
    path('note/<str:pk>/', views.getNote, name="note"),
    path('notes-post/', views.post_data, name="post-data"),
]
 