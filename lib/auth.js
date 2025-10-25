import jwt from 'jsonwebtoken';

const SECRET = 'zeka-secret-key';

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}
