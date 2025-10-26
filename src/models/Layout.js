import mongoose from 'mongoose';

const LayoutSchema = new mongoose.Schema({
  admin: { type: String, required: true },
  elements: {
    type: [
      {
        id: String,
        type: String,
        position: { x: Number, y: Number },
        size: { width: Number, height: Number },
        content: String,
        visible: { type: Boolean, default: true }
      }
    ],
    default: []
  },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Layout || mongoose.model('Layout', LayoutSchema);
