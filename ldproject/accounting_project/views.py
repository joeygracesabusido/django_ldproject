from django.shortcuts import render
from rest_framework import response



def getRoutes(request):
    return JsonResponse('Our Api', safe=False)
