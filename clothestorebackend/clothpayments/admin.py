from django.contrib import admin
from .models import UserPayment

@admin.register(UserPayment)
class UserPaymentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "mobile",
        "amount",
        "status",
        "razorpay_order_id",

    )
    search_fields = ("name", "mobile", "razorpay_order_id")
    readonly_fields = (
        "razorpay_order_id",
        "razorpay_payment_id",
        "razorpay_signature",
    )

