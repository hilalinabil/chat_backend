export default function presenceHandler(io, socket) {
    socket.on("setStatus", (status) => {
        console.log(`👤 User ${socket.id} is now ${status}`);
        io.emit("statusUpdate", { userId: socket.id, status });
    });
}
