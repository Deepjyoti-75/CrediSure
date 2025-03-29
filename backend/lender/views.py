from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import InputDataSerializer, PredictionResultSerializer, PredictionRecordSerializer
from .models import PredictionRecord
from .ml_utils import predict_credit_risk, load_model
from user.permissions import IsLender

load_model()


class RiskPredictionAPIView(APIView):
    permission_classes = [IsAuthenticated, IsLender]

    def post(self, request):
        input_serializer = InputDataSerializer(data=request.data)

        if not input_serializer.is_valid():
            return Response(
                {'error': input_serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        input_data = input_serializer.validated_data

        prediction_result = predict_credit_risk(input_data)

        if 'error' in prediction_result:
            return Response(
                {'error': prediction_result['error']},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        result_serializer = PredictionResultSerializer(data=prediction_result)

        if not result_serializer.is_valid():
            return Response(
                {'error': 'Failed to generate valid prediction'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        try:
            record = PredictionRecord(
                loan_amount=request.data.get('loan_amount'),
                emi=request.data.get('emi'),
                tenure=request.data.get('tenure'),
                rate_of_interest=request.data.get('rate_of_interest'),
                customer_age=request.data.get('customer_age'),
                gender=request.data.get('gender'),
                employment_type=request.data.get('employment_type'),
                residence_type=request.data.get('residence_type'),
                num_loans=request.data.get('num_loans'),
                secured_loans=request.data.get('secured_loans'),
                unsecured_loans=request.data.get('unsecured_loans'),
                new_loans_last_3_months=request.data.get('new_loans_last_3_months'),
                tier=request.data.get('tier'),

                credit_score=prediction_result['credit_score'],
                risk_level=prediction_result['risk_level'],
                default_probability=prediction_result['default_probability'],
                default_prediction=prediction_result['default_prediction']
            )
            record.save()
        except Exception as e:
            print(f"Error saving prediction record: {e}")

        return Response(result_serializer.validated_data, status=status.HTTP_200_OK)


class LastPredictionsAPIView(APIView):
    permission_classes = [IsAuthenticated, IsLender]

    def get(self, request):
        predictions = PredictionRecord.objects.order_by('-created_at')[:20]
        serializer = PredictionRecordSerializer(predictions, many=True)
        return Response(serializer.data)