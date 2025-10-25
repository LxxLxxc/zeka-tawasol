import mongoose from 'mongoose';

const SettingSchema = new mongoose.Schema({
  user: { type: String, required: true },
  preferences: {
    theme: { type: String, default: 'light' },
    language: { type: String, default: 'ar' },
    notifications: { type: Boolean, default: true }
  },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Setting || mongoose.model('Setting', SettingSchema);
