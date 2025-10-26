import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
  status: { type: String, default: 'Draft' },
  icon: { type: String, default: '🧠' },
  features: { type: [String], default: ['Chat', 'Notifications'] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
