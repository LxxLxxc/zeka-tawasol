import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
  user: { type: String, required: true },
  targetType: { type: String, required: true }, // e.g. 'post', 'project', 'comment'
  targetId: { type: String, required: true },
  savedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Bookmark || mongoose.model('Bookmark', BookmarkSchema);
