from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import note

class noteSeralizers(ModelSerializer):
    class Meta:
        model = note
        fields = '__all__'