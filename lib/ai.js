import axios from 'axios';

export async function generateAIResponse(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;

  const response = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.choices[0].text.trim();
}
