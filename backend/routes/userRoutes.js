import express from "express";

import { registerUser, authUser, allUsers, intrestMatch } from "../controllers/userControllers.js";

import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/match").get(protect, intrestMatch);

export default router;