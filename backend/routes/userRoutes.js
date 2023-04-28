import express from "express";

import { registerUser, authUser, allUsers, intrestMatch,update } from "../controllers/userControllers.js";

import { protect, verify } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/match").get(protect, intrestMatch);
router.route("/update").patch(protect, update);
router.route("/verify").get(verify);


export default router;