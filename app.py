from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import json
from agent import initialize_client, upload_reference_file, interpret_dream

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize the Gemini client and upload reference file at startup
client = None
reference_file = None

# Changed from @app.before_first_request which is deprecated in newer Flask versions
@app.before_request
def setup():
    global client, reference_file
    if client is None or reference_file is None:
        try:
            client = initialize_client()
            reference_file = upload_reference_file(client)
        except Exception as e:
            print(f"Error during setup: {e}")

@app.route('/interpret', methods=['POST'])
def interpret():
    """Handle regular dream interpretation requests"""
    global client, reference_file

    if not client or not reference_file:
        try:
            client = initialize_client()
            reference_file = upload_reference_file(client)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    data = request.json
    if data is None:
        return jsonify({"error": "Invalid JSON or no content provided"}), 400

    dream_text = data.get('dream_text', '')

    if not dream_text:
        return jsonify({"error": "No dream text provided"}), 400

    try:
        interpretation = interpret_dream(client, reference_file, dream_text)
        return jsonify({"interpretation": interpretation})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/interpret-stream', methods=['POST'])
def interpret_stream():
    """Handle streaming dream interpretation requests"""
    global client, reference_file

    if not client or not reference_file:
        try:
            client = initialize_client()
            reference_file = upload_reference_file(client)
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    data = request.json
    if data is None:
        return jsonify({"error": "Invalid JSON or no content provided"}), 400

    dream_text = data.get('dream_text', '')

    if not dream_text:
        return jsonify({"error": "No dream text provided"}), 400

    def generate():
        try:
            # Define a callback function to yield chunks
            def stream_callback(text):
                yield text

            # Get the interpretation with streaming
            interpretation = interpret_dream(client, reference_file, dream_text, callback=stream_callback)

            # Yield the final interpretation
            yield interpretation
        except Exception as e:
            yield json.dumps({"error": str(e)})

    return Response(generate(), mimetype='text/plain')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)