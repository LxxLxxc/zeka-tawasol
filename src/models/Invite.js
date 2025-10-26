import mongoose from 'mongoose';

const InviteSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiverEmail: { type: String, required: true },
  groupId: { type: String, default: null },
  projectId: { type: String, default: null },
  status: { type: String, default: 'Pending' }, // 'Pending', 'Accepted', 'Declined'
  sentAt: { type: Date, default: Date.now },
  respondedAt: { type: Date, default: null }
});

export default mongoose.models.Invite || mongoose.model('Invite', InviteSchema);
