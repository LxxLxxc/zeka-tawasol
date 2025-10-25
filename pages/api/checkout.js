import { createCheckoutSession } from '../../lib/stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: 'Missing amount' });
  }

  try {
    const url = await createCheckoutSession(amount, 'https://zeka-tawasol.vercel.app/success', 'https://zeka-tawasol.vercel.app/cancel');
    res.status(200).json({ url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
}
