import mongoose from 'mongoose';

const AppSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  user: { type: String, required: true },
  features: { type: [String], default: ['Chat', 'Notifications'] },
  icon: { type: String, default: '🧠' },
  status: { type: String, default: 'Draft' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.App || mongoose.model('App', AppSchema);
