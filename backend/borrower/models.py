from django.db import models
from user.models import User


class LoanApplication(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )

    applicant = models.ForeignKey(User, on_delete=models.CASCADE, related_name='loan_applications')
    loan_amount = models.FloatField()
    emi = models.FloatField()
    tenure = models.IntegerField()
    rate_of_interest = models.FloatField()
    customer_age = models.IntegerField()
    gender = models.CharField(max_length=10)
    employment_type = models.CharField(max_length=20)
    residence_type = models.CharField(max_length=20)
    num_loans = models.IntegerField()
    secured_loans = models.IntegerField()
    unsecured_loans = models.IntegerField()
    new_loans_last_3_months = models.IntegerField()
    tier = models.CharField(max_length=10)

    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Loan Application #{self.id} - {self.applicant.username} - {self.status}"