import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  role: { type: String, default: 'user' },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  badgeColor: { type: String, default: '#999' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
