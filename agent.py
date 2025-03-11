import os
from google import genai
from google.genai import types

def initialize_client():
    """Initialize and return the Gemini client."""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("Error: GEMINI_API_KEY environment variable is not set.")
    return genai.Client(api_key=api_key)

def upload_reference_file(client):
    """Upload the reference file and return the file object."""
    try:
        file_path = "./assets/file.txt"
        file = client.files.upload(file=file_path)
        return file
    except Exception as e:
        raise Exception(f"Error loading reference file: {e}")

def interpret_dream(client, file, dream_text, callback=None):
    """
    Process a dream and return the interpretation.
    
    Args:
        client: The Gemini client
        file: The uploaded reference file
        dream_text: The dream to interpret
        callback: Optional callback function for streaming responses
    
    Returns:
        The full interpretation text
    """
    try:
        model = "gemini-2.0-flash"
        contents = [
            types.Content(
                role="user",
                parts=[
                    types.Part.from_uri(
                        file_uri=file.uri,
                        mime_type=file.mime_type,
                    ),
                    types.Part.from_text(text=dream_text),
                ],
            ),
        ]
        
        generate_content_config = types.GenerateContentConfig(
            temperature=1,
            top_p=0.95,
            top_k=40,
            max_output_tokens=8192,
            response_mime_type="text/plain",
            system_instruction=[
                types.Part.from_text(
                text="You are a helpful AI Islamic dream interpreter. Your task is to interpret dreams based on Ibn Sirin's dream dictonary."
                ),
            ],
        )

        full_response = ""
        
        # Stream the response
        for chunk in client.models.generate_content_stream(
            model=model,
            contents=contents,
            config=generate_content_config,
        ):
            full_response += chunk.text
            if callback:
                callback(full_response)
            
        return full_response
        
    except Exception as e:
        raise Exception(f"Error generating interpretation: {e}")