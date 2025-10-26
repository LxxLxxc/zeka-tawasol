import mongoose from 'mongoose';

const ReactionSchema = new mongoose.Schema({
  user: { type: String, required: true },
  targetType: { type: String, required: true }, // e.g. 'post', 'comment', 'message'
  targetId: { type: String, required: true },
  emoji: { type: String, required: true }, // e.g. '👍', '❤️', '😂'
  reactedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Reaction || mongoose.model('Reaction', ReactionSchema);
