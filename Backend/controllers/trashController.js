import Trash from "../models/Trash.js";
import User from "../models/User.js";
import mongoose from "mongoose";

// Report Trash
export const reportTrash = async (req, res) => {
  const { imageUrl, location } = req.body;
  
  if (!imageUrl || !location) {
    return res.status(400).json({ message: "Image and location are required" });
  }

  const trash = await Trash.create({
    imageUrl,
    location,
    reportedBy: req.user._id,
  });

  res.status(201).json({ message: "Trash reported successfully", trash });
};

// Get All Trash Reports (Admin Only)
export const getAllTrashReports = async (req, res) => {
  const trashReports = await Trash.find().populate("reportedBy", "name email");
  res.json(trashReports);
};

// Assign Worker to Clean
export const assignWorker = async (req, res) => {
  const { trashId, workerId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(trashId) || !mongoose.Types.ObjectId.isValid(workerId)) {
    return res.status(400).json({ message: 'Invalid Trash ID or Worker ID' });
  }

  try {
    const trash = await Trash.findById(trashId);
    const worker = await Worker.findById(workerId);

    if (!trash || !worker) {
      return res.status(404).json({ message: 'Trash or Worker not found' });
    }

    trash.assignedWorker = workerId;
    await trash.save();
    res.status(200).json({ message: 'Worker assigned successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  

// Confirm Cleanup
export const confirmCleanup = async (req, res) => {
  const { trashId, cleanedImageUrl } = req.body;
  const trash = await Trash.findById(trashId);

  if (!trash) {
    return res.status(404).json({ message: "Trash not found" });
  }

  trash.status = "Cleaned";
  trash.cleanedImageUrl = cleanedImageUrl;
  await trash.save();

  // Award points to the user who reported
  const user = await User.findById(trash.reportedBy);
  user.points += 50;
  await user.save();

  res.json({ message: "Cleanup confirmed and points awarded", trash });
};
