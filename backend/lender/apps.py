from django.apps import AppConfig


class LenderConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'lender'

    def ready(self):
        import lender.ml_utils as ml_utils

        ml_utils.load_model()