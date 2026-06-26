from django.shortcuts import render
from .models import Lead

def home(request):

    if request.method == "POST":

        Lead.objects.create(
            name=request.POST["name"],
            email=request.POST["email"],
            phone=request.POST["phone"],
            service=request.POST["service"]
        )

        return render(request, "success.html")

    return render(request, "index.html")