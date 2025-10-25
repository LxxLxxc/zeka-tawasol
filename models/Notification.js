import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  user: { type: String, required: true },
  type: { type: String, required: true }, // e.g. 'comment', 'mention', 'system'
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  relatedId: { type: String, default: null }, // e.g. postId, projectId
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);
