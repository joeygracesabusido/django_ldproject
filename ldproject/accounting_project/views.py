from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import note
from .serializers import noteSeralizers

from rest_framework.parsers import JSONParser


@api_view(['GET'])
def getRoutes(request):
    return Response('Our Api')

@api_view(['GET'])
def getNotes(request):
    notes = note.objects.all()
    serializer = noteSeralizers(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request,pk):
    notes = note.objects.get(id=pk)
    serializer = noteSeralizers(notes, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def post_data(request):
    
    serializer = noteSeralizers(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)