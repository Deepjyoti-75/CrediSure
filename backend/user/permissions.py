from rest_framework import permissions


class IsBorrower(permissions.BasePermission):
    """
    Custom permission to only allow borrowers to access the view.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_borrower()


class IsLender(permissions.BasePermission):
    """
    Custom permission to only allow lenders to access the view.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_lender()