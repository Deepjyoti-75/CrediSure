from django.urls import path
from .views import (
    CreateLoanApplicationView,
    BorrowerApplicationsView,
    LenderApplicationsView,
    LoanApplicationDetailView
)

urlpatterns = [
    path('apply/', CreateLoanApplicationView.as_view(), name='create_loan_application'),
    path('my-applications/', BorrowerApplicationsView.as_view(), name='borrower_applications'),
    path('all-applications/', LenderApplicationsView.as_view(), name='lender_applications'),
    path('application/<int:pk>/', LoanApplicationDetailView.as_view(), name='application_detail'),
]