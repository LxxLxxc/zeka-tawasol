import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
  reporter: { type: String, required: true },
  targetType: { type: String, required: true }, // e.g. 'post', 'comment', 'user'
  targetId: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  reviewedBy: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Report || mongoose.model('Report', ReportSchema);
