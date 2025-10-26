import { generateAIResponse } from '../../lib/ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'Missing or invalid prompt' });
  }

  try {
    const result = await generateAIResponse(prompt);
    res.status(200).json({ result });
  } catch (error) {
    console.error('AI generation error:', error);
    res.status(500).json({ error: 'AI generation failed' });
  }
}
