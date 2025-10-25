import mongoose from 'mongoose';

const FollowSchema = new mongoose.Schema({
  follower: { type: String, required: true },
  following: { type: String, required: true },
  type: { type: String, default: 'user' }, // e.g. 'user', 'project', 'group'
  followedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Follow || mongoose.model('Follow', FollowSchema);
