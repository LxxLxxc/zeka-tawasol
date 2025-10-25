import mongoose from 'mongoose';

const AuditSchema = new mongoose.Schema({
  actor: { type: String, required: true },
  action: { type: String, required: true }, // e.g. 'update-profile', 'delete-post', 'change-role'
  targetType: { type: String, required: true }, // e.g. 'user', 'post', 'project'
  targetId: { type: String, required: true },
  before: { type: mongoose.Schema.Types.Mixed, default: null },
  after: { type: mongoose.Schema.Types.Mixed, default: null },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.models.Audit || mongoose.model('Audit', AuditSchema);
