from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from legal import LegalChatbot

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for the app (allow all origins)
CORS(app)

# Instantiate the chatbot
try:
    chatbot = LegalChatbot()
except Exception as e:
    raise Exception(f"Failed to initialize LegalChatbot: {e}")

@app.route('/api/chat', methods=['POST'])
def chat():
    """
    Endpoint for generating chatbot responses.
    Expected JSON format:
    {
        "message": "User message",
        "detailed": true  # Optional, defaults to false
    }
    """
    data = request.get_json()
    
    if not data or 'message' not in data:
        return jsonify({"error": "Invalid input. Provide a 'message' field."}), 400

    user_message = data['message']

    try:
        response = chatbot.generate_response(user_message)

        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": "Failed to process the request."}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
