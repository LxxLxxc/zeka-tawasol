import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  members: { type: [String], default: [] },
  icon: { type: String, default: '👥' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Group || mongoose.model('Group', GroupSchema);
