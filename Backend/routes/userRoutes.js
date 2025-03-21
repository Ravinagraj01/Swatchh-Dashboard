import express from "express"
import { authuser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authuser);

export default router;