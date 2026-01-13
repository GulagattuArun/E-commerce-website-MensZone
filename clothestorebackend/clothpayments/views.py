import json
import razorpay
from django.views import View
from django.http import JsonResponse
from django.conf import settings
from django.utils.decorators import method_decorator
from .models import UserPayment
from .serializers import Paymentserializer
from django.views.decorators.csrf import csrf_exempt


razorpay_client = razorpay.Client(
    auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
)

# CREATE PAYMENT VIEW

@method_decorator(csrf_exempt, name="dispatch")
class CreatePaymentView(View):

    def post(self, request):
        data = json.loads(request.body)

        serializer = Paymentserializer(data=data)
        if not serializer.is_valid():
            return JsonResponse(serializer.errors, status=400)

        payment = UserPayment.objects.create(
            name=serializer.validated_data["name"],
            mobile=serializer.validated_data["mobile"],
            amount=serializer.validated_data["amount"]*100,
            status="CREATED"
        )

        order = razorpay_client.order.create({
            "amount": payment.amount,
            "currency": "INR",
            "payment_capture": 1
        })

        payment.razorpay_order_id = order["id"]
        payment.save()

        return JsonResponse({
            "order_id": order["id"],
            "amount": payment.amount,
            "key": settings.RAZORPAY_KEY_ID
        }, status=201)


#VERIFY PAYMENT VIEW
class VerifyPaymentView(View):

    def post(self, request):
        data = json.loads(request.body)

        try:
            payment = UserPayment.objects.get(
                razorpay_order_id=data["razorpay_order_id"]
            )
        except UserPayment.DoesNotExist:
            return JsonResponse({"error": "Payment not found"}, status=404)

        try:
            razorpay_client.utility.verify_payment_signature({
                "razorpay_order_id": data["razorpay_order_id"],
                "razorpay_payment_id": data["razorpay_payment_id"],
                "razorpay_signature": data["razorpay_signature"],
            })

            payment.razorpay_payment_id = data["razorpay_payment_id"]
            payment.razorpay_signature = data["razorpay_signature"]
            payment.status = "SUCCESS"
            payment.save()

            return JsonResponse({"message": "Payment success"})
        except:
            payment.status = "FAILED"
            payment.save()
            return JsonResponse({"message": "Payment failed"}, status=400)

