import mongoose from 'mongoose';

const trashReportSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },
  assignedWorker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  cleanedImageUrl: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const TrashReport = mongoose.model('TrashReport', trashReportSchema);
export default TrashReport;
