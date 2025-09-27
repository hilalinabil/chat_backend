export default function messageHandler(io, socket) {
    socket.on("sendMessage", (data) => {
        console.log("📩 New message:", data);
        io.emit("newMessage", data); // broadcast
    });
}
