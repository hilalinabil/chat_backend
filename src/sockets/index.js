import { initSocketService } from "../services/socket.service.js";
import messageHandler from "./handlers/message.handler.js";
import presenceHandler from "./handlers/presence.handler.js";

export default function socketInit(io) {
    initSocketService(io);

    io.on("connection", (socket) => {
        console.log("⚡ User connected:", socket.id);

        messageHandler(io, socket);
        presenceHandler(io, socket);

        socket.on("disconnect", () => {
            console.log("❌ User disconnected:", socket.id);
        });
    });
}
