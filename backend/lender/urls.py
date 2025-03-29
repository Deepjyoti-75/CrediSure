from django.urls import path
from .views import RiskPredictionAPIView, LastPredictionsAPIView

urlpatterns = [
    path('predict/', RiskPredictionAPIView.as_view(), name='predict_risk'),
    path('predictions/', LastPredictionsAPIView.as_view(), name='last_predictions'),
]