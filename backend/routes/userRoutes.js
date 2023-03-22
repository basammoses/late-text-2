import express from "express";

import { registerUser, authUser, allUsers, intrestMatch,update } from "../controllers/userControllers.js";

import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/match").get(protect, intrestMatch);
router.route("/update").put(protect, update);

export default router;