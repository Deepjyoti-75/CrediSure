from rest_framework import serializers
from .models import LoanApplication


class LoanApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanApplication
        exclude = ('status',)
        read_only_fields = ('applicant',)

    def create(self, validated_data):
        validated_data['applicant'] = self.context['request'].user
        return super().create(validated_data)


class LoanApplicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanApplication
        fields = '__all__'