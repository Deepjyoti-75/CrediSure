import joblib
import tensorflow as tf
import pandas as pd
import numpy as np
import os
from django.conf import settings

MODEL_PATH = os.path.join(settings.BASE_DIR, 'lender', 'ml_models', 'neural_network_model.keras')
MODEL_INFO_PATH = os.path.join(settings.BASE_DIR, 'lender', 'ml_models', 'model_info.pkl')

model = None
model_info = None


def load_model():
    global model, model_info

    try:
        model = tf.keras.models.load_model(MODEL_PATH)

        model_info = joblib.load(MODEL_INFO_PATH)

        print("Model and preprocessor loaded successfully!")
        return True
    except Exception as e:
        print(f"Error loading model: {e}")
        return False


def preprocess_input(data):

    df = pd.DataFrame([data])

    for col in model_info['numerical_cols'] + model_info['categorical_cols']:
        if col not in df.columns:
            if col in model_info['numerical_cols']:
                df[col] = 0
            else:
                df[col] = "Unknown"

    return model_info['preprocessor'].transform(df)


def get_risk_assessment(default_probability):

    credit_score = int(100 - default_probability * 100)

    if credit_score >= 80:
        risk_level = "Very Low Risk"
        feedback = "Excellent credit profile. This applicant has a very low likelihood of default."
    elif credit_score >= 60:
        risk_level = "Low Risk"
        feedback = "Good credit profile. This applicant presents a low risk of default."
    elif credit_score >= 40:
        risk_level = "Moderate Risk"
        feedback = "Average credit profile. There is a moderate risk of default, and standard monitoring is advised."
    elif credit_score >= 20:
        risk_level = "High Risk"
        feedback = "Poor credit profile. This applicant presents a high risk of default. Consider additional credit protection."
    else:
        risk_level = "Very High Risk"
        feedback = "Very poor credit profile. This applicant has a high likelihood of default. Loan approval not recommended."

    return {
        'credit_score': credit_score,
        'risk_level': risk_level,
        'default_probability': float(default_probability),
        'default_prediction': 1 if default_probability > 0.5 else 0,
        'feedback': feedback
    }


def predict_credit_risk(input_data):

    global model, model_info

    if model is None or model_info is None:
        load_model()

    try:
        processed_data = preprocess_input(input_data)

        default_prob = model.predict(processed_data)[0][0]

        return get_risk_assessment(default_prob)

    except Exception as e:
        print(f"Prediction error: {e}")
        return {
            'error': str(e),
            'status': 'failed'
        }