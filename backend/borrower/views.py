from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import LoanApplication
from .serializers import LoanApplicationSerializer, LoanApplicationListSerializer
from user.permissions import IsBorrower, IsLender
from lender.ml_utils import predict_credit_risk


class CreateLoanApplicationView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LoanApplicationSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        # Format data for prediction
        input_data = {
            'Loan Amount': instance.loan_amount,
            'EMI': instance.emi,
            'Tenure': instance.tenure,
            'Rate of interest': instance.rate_of_interest,
            'Gender': instance.gender,
            'Employment type': instance.employment_type,
            'Resident type of customer': instance.residence_type,
            'Customer age when loanwas taken': instance.customer_age,
            'No of loans': instance.num_loans,
            'No of secured loans': instance.secured_loans,
            'No of unsecured loans': instance.unsecured_loans,
            'No of new loans in last 3 months': instance.new_loans_last_3_months,
            'Tier': instance.tier,
            'Maximum MOB': 0,
        }

        # Get prediction but don't return it to borrower
        predict_credit_risk(input_data)

        return Response({
            "message": "Loan application submitted successfully",
            "application_id": instance.id
        }, status=status.HTTP_201_CREATED)


class BorrowerApplicationsView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, IsBorrower]
    serializer_class = LoanApplicationSerializer

    def get_queryset(self):
        return LoanApplication.objects.filter(applicant=self.request.user).order_by('-created_at')


class LenderApplicationsView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, IsLender]
    serializer_class = LoanApplicationListSerializer

    def get_queryset(self):
        return LoanApplication.objects.all().order_by('-created_at')


class LoanApplicationDetailView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = LoanApplicationListSerializer
    queryset = LoanApplication.objects.all()

    def get_serializer_class(self):
        if self.request.user.is_lender():
            return LoanApplicationListSerializer
        return LoanApplicationSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        # Check if user is authorized to view this application
        if not request.user.is_lender() and instance.applicant != request.user:
            return Response(
                {"error": "You don't have permission to view this application"},
                status=status.HTTP_403_FORBIDDEN
            )

        serializer = self.get_serializer(instance)

        if request.user.is_lender():
            # For lenders, get the credit risk prediction
            input_data = {
                'Loan Amount': instance.loan_amount,
                'EMI': instance.emi,
                'Tenure': instance.tenure,
                'Rate of interest': instance.rate_of_interest,
                'Gender': instance.gender,
                'Employment type': instance.employment_type,
                'Resident type of customer': instance.residence_type,
                'Customer age when loanwas taken': instance.customer_age,
                'No of loans': instance.num_loans,
                'No of secured loans': instance.secured_loans,
                'No of unsecured loans': instance.unsecured_loans,
                'No of new loans in last 3 months': instance.new_loans_last_3_months,
                'Tier': instance.tier,
                'Maximum MOB': 0,
            }

            prediction_result = predict_credit_risk(input_data)

            return Response({
                **serializer.data,
                'prediction': prediction_result
            })

        return Response(serializer.data)