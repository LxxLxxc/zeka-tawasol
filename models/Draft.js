import mongoose from 'mongoose';

const DraftSchema = new mongoose.Schema({
  user: { type: String, required: true },
  type: { type: String, required: true }, // e.g. 'post', 'comment', 'project'
  content: { type: String, required: true },
  autoSavedAt: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false }
});

export default mongoose.models.Draft || mongoose.model('Draft', DraftSchema);
