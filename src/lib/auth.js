import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'zeka-secret-key';

export function signToken(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid payload for token');
  }

  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;

  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return null;
  }
}
