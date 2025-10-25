import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  uploader: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true }, // e.g. 'image/png', 'application/pdf'
  size: { type: Number, required: true }, // in bytes
  url: { type: String, required: true },
  linkedTo: {
    type: {
      entityType: String, // e.g. 'post', 'project', 'message'
      entityId: String
    },
    default: null
  },
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.models.File || mongoose.model('File', FileSchema);
