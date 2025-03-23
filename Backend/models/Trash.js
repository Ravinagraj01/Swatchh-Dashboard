import mongoose from "mongoose";

const trashSchema = mongoose.Schema({
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
    enum: ["Pending", "Assigned", "Cleaned"],
    default: "Pending",
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  cleanedImageUrl: {
    type: String,
    default: "",
  }
}, { timestamps: true });

const Trash = mongoose.model("Trash", trashSchema);
export default Trash;
