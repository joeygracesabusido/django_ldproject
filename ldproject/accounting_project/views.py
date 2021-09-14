from rest_framework import status
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
    # data = request.data
    # notes = note.objects.create(
    #     body=data['body']
    # )
    # serializer = noteSeralizers(notes, many=False)
    # return Response(serializer.data)

    serializer = noteSeralizers(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)