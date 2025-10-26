import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  user: { type: String, required: true },
  type: { type: String, default: 'suggestion' }, // 'suggestion', 'issue', 'rating'
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: null },
  status: { type: String, default: 'Pending' }, // 'Pending', 'Reviewed', 'Resolved'
  submittedAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date, default: null }
});

export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
