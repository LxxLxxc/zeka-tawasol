import mongoose from 'mongoose';

const BadgeSchema = new mongoose.Schema({
  color: { type: String, required: true },
  label: { type: String, required: true },
  role: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Badge || mongoose.model('Badge', BadgeSchema);
