import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import socketInit from "./sockets/index.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });
socketInit(io);

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
