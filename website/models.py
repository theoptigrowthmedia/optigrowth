from django.db import models

class Lead(models.Model):

    SERVICES = [

        ("youtube","YouTube Views"),

        ("meta","Meta Ads"),

        ("app","App Install Ads"),

        ("googlecall","Google Call Ads"),

        ("metacall","Meta Call Ads")

    ]

    name=models.CharField(max_length=100)

    email=models.EmailField()

    phone=models.CharField(max_length=20)

    service=models.CharField(max_length=30,
                             choices=SERVICES)

    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name