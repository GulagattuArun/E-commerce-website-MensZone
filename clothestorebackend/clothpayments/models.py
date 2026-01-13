from django.db import models
from django.core.validators import RegexValidator
# Create your models here.
class UserPayment(models.Model):
    name = models.CharField(max_length=100)

    mobile = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(
                regex=r'^[6-9]\d{9}$',
                message="Mobile number must be exactly 10 digits and start with 6-9"
            )
        ]
    )

    amount = models.IntegerField()

    razorpay_order_id = models.CharField(max_length=100, blank=True, null=True)
    razorpay_payment_id = models.CharField(max_length=100, blank=True, null=True)
    razorpay_signature = models.CharField(max_length=255, blank=True, null=True)

    status = models.CharField(
        max_length=20,
        choices=[
            ("CREATED", "CREATED"),
            ("SUCCESS", "SUCCESS"),
            ("FAILED", "FAILED"),
        ],
        default="CREATED"
    )
