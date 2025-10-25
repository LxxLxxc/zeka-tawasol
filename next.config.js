const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    MONGODB_URI: process.env.MONGODB_URI
  }
};

module.exports = nextConfig;
