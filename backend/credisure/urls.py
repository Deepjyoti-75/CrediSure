from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('user.urls')),
    path('api/lender/', include('lender.urls')),
    path('api/borrower/', include('borrower.urls')),
]