import { createCheckoutSession } from '../../lib/stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, successUrl, cancelUrl } = req.body;

  if (
    typeof amount !== 'number' ||
    amount <= 0 ||
    !successUrl ||
    !cancelUrl
  ) {
    return res.status(400).json({ error: 'Missing or invalid payment details' });
  }

  try {
    const url = await createCheckoutSession(amount, successUrl, cancelUrl);
    res.status(200).json({ url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
}
