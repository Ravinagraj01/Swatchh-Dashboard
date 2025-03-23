import express from "express";
import { reportTrash, getAllTrashReports, assignWorker, confirmCleanup } from "../controllers/trashController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User reports trash
router.post("/report", protect, authorize("user"), reportTrash);

// Admin fetches all reports
router.get("/", protect, authorize("admin"), getAllTrashReports);

// Admin assigns worker
router.post("/assign", protect, authorize("admin"), assignWorker);

// Worker confirms cleanup
router.post("/confirm", protect, authorize("worker"), confirmCleanup);

export default router;
