import axios from 'axios';

// Define the base URL for API requests
const API_URL = 'http://localhost:5000';

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Submit a dream for interpretation
 * @param dreamText The dream text to interpret
 * @returns A promise that resolves to the interpretation response
 */
export const interpretDream = async (dreamText: string) => {
  try {
    const response = await apiClient.post('/interpret', { dream_text: dreamText });
    return response.data;
  } catch (error) {
    console.error('Error interpreting dream:', error);
    throw error;
  }
};

/**
 * Get the streaming interpretation of a dream
 * @param dreamText The dream text to interpret
 * @param callback Function to call with each chunk of the interpretation
 * @returns A promise that resolves when the stream is complete
 */
export const streamDreamInterpretation = async (
  dreamText: string,
  callback: (text: string) => void
) => {
  try {
    const response = await fetch(`${API_URL}/interpret-stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dream_text: dreamText }),
    });

    if (!response.body) {
      throw new Error('ReadableStream not supported');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      result += chunk;
      callback(result);
    }

    return result;
  } catch (error) {
    console.error('Error streaming dream interpretation:', error);
    throw error;
  }
};