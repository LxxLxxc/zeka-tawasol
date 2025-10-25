import { generateAIResponse } from '../../lib/ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const result = await generateAIResponse(prompt);
    res.status(200).json({ result });
  } catch (error) {
    console.error('AI error:', error);
    res.status(500).json({ error: 'AI generation failed' });
  }
}
