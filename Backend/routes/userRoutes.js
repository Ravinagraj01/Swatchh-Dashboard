import express from "express"
import { authuser, getUserProfile, registerUser } from "../controllers/userController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authuser);

router.get('/profile', protect , getUserProfile);

router.get('/admin', protect , authorize('admin'), (req, res) => {
    res.json({
        message : "Welcome Admin"
    });
});

export default router;