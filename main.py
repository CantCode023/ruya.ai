import streamlit as st
from agent import initialize_client, upload_reference_file, interpret_dream

# Page configuration
st.set_page_config(
    page_title="ruya.ai",
    page_icon="💤",
    layout="centered",
    initial_sidebar_state="collapsed",
)

@st.cache_resource
def get_client():
    """Get the Gemini client with caching."""
    try:
        return initialize_client()
    except Exception as e:
        st.error(str(e))
        st.stop()

@st.cache_resource
def get_reference_file(_client):
    """Get the reference file with caching."""
    try:
        return upload_reference_file(_client)
    except Exception as e:
        st.error(str(e))
        st.stop()

def main():
    # Page title and description
    st.title("✨ Islamic Dream Interpreter")
    st.markdown("""
    This tool interprets dreams according to Islamic traditions, drawing from the works of Ibn Sirin.
    Enter your dream below to receive an interpretation.
    """)
    
    # Initialize client and upload reference file
    client = get_client()
    file = get_reference_file(client)
    
    # Dream input
    with st.form("dream_form"):
        dream_text = st.text_area(
            "Describe your dream:",
            height=150,
            placeholder="I dreamt of flying over mountains and oceans..."
        )
        submit_button = st.form_submit_button("Interpret Dream")
    
    # Handle form submission
    if submit_button and dream_text.strip():
        with st.spinner("Interpreting your dream..."):
            st.subheader("Dream Interpretation")
            
            # Create a placeholder for streaming output
            interpretation_placeholder = st.empty()
            
            try:
                # Define callback for streaming updates
                def update_ui(text):
                    interpretation_placeholder.markdown(text)
                
                # Get interpretation with streaming updates
                interpret_dream(client, file, dream_text, callback=update_ui)
            except Exception as e:
                st.error(f"Error: {str(e)}")
    
    # About section in sidebar
    with st.sidebar:
        st.subheader("About")
        st.markdown("""
        This application uses AI to interpret dreams according to Islamic traditions, 
        particularly drawing from the works of Ibn Sirin, a renowned Islamic dream interpreter.
        
        The interpretations are generated using Google's Gemini AI model.
        
        **Note:** This is for educational and entertainment purposes only.
        """)

if __name__ == "__main__":
    main()