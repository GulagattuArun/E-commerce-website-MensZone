from rest_framework import serializers
from .models import UserPayment

class Paymentserializer(serializers.ModelSerializer):

    class Meta:
        model = UserPayment
        fields ='__all__'

    #mandatory fields check (extra safety)
    def validate(self, data):
        if not data.get("name"):
            raise serializers.ValidationError({"name": "Name is required"})
        if not data.get("mobile"):
            raise serializers.ValidationError({"mobile": "Mobile number is required"})
        if not data.get("amount"):
            raise serializers.ValidationError({"amount": "Amount is required"})
        return data

    #  amount validation
    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("Amount must be greater than 0")
        return value
