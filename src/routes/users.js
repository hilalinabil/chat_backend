import express from "express";
import authMiddleware from "../middlewares/auth.js";
import User from "../models/user.model.js";

const router = express.Router();

// Protected route - get logged-in user
router.get("/me", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
