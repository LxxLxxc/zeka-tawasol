import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  postId: { type: String, required: true },
  author: { type: String, required: true },
  role: { type: String, default: 'user' },
  content: { type: String, required: true },
  isEdited: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
