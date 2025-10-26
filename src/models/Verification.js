import mongoose from 'mongoose';

const VerificationSchema = new mongoose.Schema({
  user: { type: String, required: true },
  method: { type: String, required: true }, // e.g. 'email', 'phone', 'document'
  code: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // 'Pending', 'Verified', 'Expired'
  requestedAt: { type: Date, default: Date.now },
  verifiedAt: { type: Date, default: null }
});

export default mongoose.models.Verification || mongoose.model('Verification', VerificationSchema);
