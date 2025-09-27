import User from "../models/user.model.js";
import { generateToken } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        const token = generateToken({ id: user._id });
        res.json({ user, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ error: "User not found" });

        // Password check
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = generateToken({ id: user._id });
        res.json({ user, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
