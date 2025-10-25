import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  role: { type: String, default: 'user' },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
