from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    USER_TYPE_CHOICES = (
        ('borrower', 'Borrower'),
        ('lender', 'Lender'),
        ('admin', 'Admin'),
    )

    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default='borrower')
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def is_borrower(self):
        return self.user_type == 'borrower'

    def is_lender(self):
        return self.user_type == 'lender'

    def is_admin_user(self):
        return self.user_type == 'admin'