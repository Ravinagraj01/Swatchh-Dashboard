import mongoose from 'mongoose';

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, default: 'available', enum: ['available', 'assigned', 'completed'] },
  assignedTrashId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trash', default: null }
});

const Worker = mongoose.model('Worker', workerSchema);
export default Worker;
