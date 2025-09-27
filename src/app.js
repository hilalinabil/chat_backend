import express from "express";
import cors from "cors";
import morgan from "morgan";

import limiter from "./middlewares/rateLimiter.js";
import errorHandler from "./middlewares/errorHandler.js";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import chatRoutes from "./routes/chats.js";
import messageRoutes from "./routes/messages.js";

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Chat app backend is running ✅" });
});

// Error handler
app.use(errorHandler);

export default app;
