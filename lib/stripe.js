import Stripe from 'stripe';

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey || typeof secretKey !== 'string') {
  throw new Error('❌ Missing or invalid STRIPE_SECRET_KEY');
}

const stripe = new Stripe(secretKey);

export async function createCheckoutSession(amount, successUrl, cancelUrl) {
  if (
    typeof amount !== 'number' ||
    amount <= 0 ||
    !successUrl ||
    !cancelUrl
  ) {
    throw new Error('❌ Invalid payment parameters');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'AI App Publishing',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return session.url;
  } catch (error) {
    console.error('❌ Stripe session creation failed:', error.message);
    throw new Error('Payment session error');
  }
}
