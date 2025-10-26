import mongoose from 'mongoose';

const ViewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  targetType: { type: String, required: true }, // e.g. 'post', 'project', 'profile'
  targetId: { type: String, required: true },
  viewedAt: { type: Date, default: Date.now }
});

export default mongoose.models.View || mongoose.model('View', ViewSchema);
