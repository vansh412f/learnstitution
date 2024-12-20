import os
from typing import Optional
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class LegalChatbot:
    def __init__(self, api_key: Optional[str] = None):
        """
        Initialize the chatbot with secure API configuration.
        """
        if not api_key:
            api_key = os.getenv('GOOGLE_GENERATIVE_AI_KEY')
        
        if not api_key:
            raise ValueError("No API key found. Set GOOGLE_GENERATIVE_AI_KEY in your .env file.")
        
        try:
            genai.configure(api_key=api_key)
        except Exception as e:
            raise ValueError(f"API configuration failed: {e}")

        self.model = self._create_generative_model()

    def _create_generative_model(self, max_tokens: int = 512):
        """
        Create a generative model with robust configuration.
        """
        generation_config = {
            "temperature": 0.15,
            "top_p": 0.95,
            "top_k": 40,
            "max_output_tokens": max_tokens,
        }

        try:
            return genai.GenerativeModel(
                model_name="gemini-pro",
                generation_config=generation_config
            )
        except Exception as e:
            raise ValueError(f"Model creation failed: {e}")

    def generate_response(self, user_message: str) -> str:
        """
        Generate a response based on user input.
        """
        if not user_message:
            return "Please provide a valid message."
        
        if len(user_message) > 1000:
            return "Message is too long. Please limit to 1000 characters."

        user_prompt = (
            f"You are an AI legal chatbot specializing in Indian law and constitutional topics. "
            f'Provide a detailed explanation based on Indian law, breaking the concept into key points. Reference any relevant constitutional articles, case laws, or real-life examples to illustrate the answer. also, Avoid complex legal jargon to make the response easy to understand for someone without a legal background. '
            f"Query: {user_message}"
        )

        try:
            response = self.model.generate_content(user_prompt)
            generated_text = response.text
            return generated_text
        except Exception as e:
            return "Sorry, an unexpected error occurred while processing your request."

 
