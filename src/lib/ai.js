import axios from 'axios';

export async function generateAIResponse(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OpenAI API key');
  }

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    throw new Error('Invalid prompt');
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const message = response?.data?.choices?.[0]?.message?.content;
    return message?.trim() || 'No response generated.';
  } catch (error) {
    console.error('OpenAI API error:', error?.response?.data || error.message);
    throw new Error('Failed to generate AI response');
  }
}
