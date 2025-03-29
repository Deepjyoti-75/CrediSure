from django.db import models


class PredictionRecord(models.Model):

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

    credit_score = models.IntegerField()
    risk_level = models.CharField(max_length=20)
    default_probability = models.FloatField()
    default_prediction = models.BooleanField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Prediction {self.id} - Score: {self.credit_score} - Risk: {self.risk_level}"