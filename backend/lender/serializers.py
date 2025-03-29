from rest_framework import serializers
from .models import PredictionRecord


class InputDataSerializer(serializers.Serializer):

    loan_amount = serializers.FloatField(required=True)
    emi = serializers.FloatField(required=True)
    tenure = serializers.IntegerField(required=True)
    rate_of_interest = serializers.FloatField(required=True)
    gender = serializers.CharField(required=True)
    employment_type = serializers.CharField(required=True)
    residence_type = serializers.CharField(required=True)
    customer_age = serializers.IntegerField(required=True)
    num_loans = serializers.IntegerField(required=True)
    secured_loans = serializers.IntegerField(required=True)
    unsecured_loans = serializers.IntegerField(required=True)
    new_loans_last_3_months = serializers.IntegerField(required=True)
    tier = serializers.CharField(required=True)

    def to_internal_value(self, data):
        mapped_data = {
            'Loan Amount': data.get('loan_amount'),
            'EMI': data.get('emi'),
            'Tenure': data.get('tenure'),
            'Rate of interest': data.get('rate_of_interest'),
            'Gender': data.get('gender'),
            'Employment type': data.get('employment_type'),
            'Resident type of customer': data.get('residence_type'),
            'Customer age when loanwas taken': data.get('customer_age'),
            'No of loans': data.get('num_loans'),
            'No of secured loans': data.get('secured_loans'),
            'No of unsecured loans': data.get('unsecured_loans'),
            'No of new loans in last 3 months': data.get('new_loans_last_3_months'),
            'Tier': data.get('tier'),
            'Maximum MOB': 0,
        }
        return mapped_data


class PredictionResultSerializer(serializers.Serializer):
    credit_score = serializers.IntegerField()
    risk_level = serializers.CharField()
    default_probability = serializers.FloatField()
    default_prediction = serializers.IntegerField()
    feedback = serializers.CharField()


class PredictionRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = PredictionRecord
        fields = '__all__'