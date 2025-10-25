import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  user: { type: String, required: true },
  type: { type: String, required: true }, // e.g. 'login', 'post', 'comment', 'update'
  targetId: { type: String, default: null }, // e.g. postId, commentId
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);
