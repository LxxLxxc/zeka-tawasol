import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  level: { type: String, default: 'info' }, // 'info', 'warning', 'error'
  message: { type: String, required: true },
  context: { type: mongoose.Schema.Types.Mixed, default: null }, // optional metadata
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Log || mongoose.model('Log', LogSchema);
