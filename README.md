# Ruya.ai - Islamic Dream Interpretation

<div align="center">
  <img src="https://img.shields.io/badge/Ruya.ai-Islamic%20Dream%20Interpretation-brightgreen" alt="Ruya.ai Logo" />
  <p>AI-powered Islamic dream interpretation based on the works of Ibn Sirin</p>
</div>

![image](https://github.com/user-attachments/assets/00893559-0919-482a-a523-6190276c6355)

## 🌙 Overview

Ruya.ai is an intelligent dream interpretation tool that analyzes dreams according to Islamic traditions. Drawing from the works of Ibn Sirin, a renowned Islamic dream interpreter, the application leverages Google's Gemini AI to provide meaningful interpretations based on traditional Islamic dream analysis principles.

## ✨ Features

- **Islamic Dream Analysis**: Receive interpretations grounded in traditional Islamic sources
- **Real-time Streaming**: Watch interpretations appear as they're being generated
- **Modern UI**: Clean, responsive interface with a sleek glassmorphism design
- **API Access**: RESTful API endpoints for integration with other applications
- **Markdown Support**: Interpretations support markdown formatting for better readability

## 🛠️ Technology Stack

### Backend
- **Python**: Core programming language
- **Flask**: Web framework for the REST API
- **Google Gemini AI**: Large language model for dream interpretation
- **CORS**: Cross-origin resource sharing support

### Frontend
- **React**: UI library for building the user interface
- **TypeScript**: Type-safe JavaScript
- **Styled Components**: CSS-in-JS styling solution
- **Axios**: HTTP client for API requests
- **React Markdown**: For rendering markdown content

## 🚀 Getting Started

### Prerequisites

- Python 3.10 or higher
- Node.js 18 or higher
- Google Gemini API key (obtain from [Google AI Studio](https://ai.google.dev/))

### Environment Setup

1. **Create a `.env` file in the root directory**:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

2. **Alternatively, set the environment variable directly**:
   ```bash
   # Windows
   set GEMINI_API_KEY=your_api_key_here
   
   # Linux/macOS
   export GEMINI_API_KEY=your_api_key_here
   ```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ruya.ai.git
   cd ruya.ai
   ```

2. **Set up the Python backend**:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Install and build the React frontend**:
   ```bash
   cd ruya-react
   npm install
   npm run build
   ```

### Running the Application

1. **Start the Flask backend**:
   ```bash
   cd c:\Users\cantc\Desktop\Coding\Python\ruya.ai
   python app.py
   ```

2. **In a separate terminal, start the React development server**:
   ```bash
   cd c:\Users\cantc\Desktop\Coding\Python\ruya.ai\ruya-react
   npm start
   ```

3. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`

## 📚 API Documentation

### Interpret Dream (Regular)

```
POST /interpret
```

**Request Body**:
```json
{
  "dream_text": "I dreamt of flying over mountains and oceans..."
}
```

**Response**:
```json
{
  "interpretation": "Your dream interpretation text..."
}
```

### Interpret Dream (Streaming)

```
POST /interpret-stream
```

**Request Body**:
```json
{
  "dream_text": "I dreamt of flying over mountains and oceans..."
}
```

**Response**: Text stream of the interpretation as it's being generated

## 📁 Project Structure

```
ruya.ai/
├── app.py                 # Flask backend server
├── agent.py               # Gemini AI integration
├── assets/                # Reference files for dream interpretation
│   └── file.txt           # Ibn Sirin's dream dictionary
├── requirements.txt       # Python dependencies
└── ruya-react/            # React frontend
    ├── public/            # Static files
    ├── src/               # React source code
    │   ├── api/           # API client code
    │   ├── components/    # React components
    │   └── styles/        # Styling
    ├── package.json       # Node.js dependencies
    └── tsconfig.json      # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This application is for educational and entertainment purposes only. Dream interpretations are generated by AI based on traditional sources but should not be taken as religious guidance or professional advice. Always consult with qualified religious scholars for authoritative interpretations.
