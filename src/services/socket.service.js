let io;

export const initSocketService = (serverIo) => {
    io = serverIo;
};

export const emitToUser = (userId, event, data) => {
    if (io) {
        io.to(userId).emit(event, data);
    }
};

export const broadcast = (event, data) => {
    if (io) {
        io.emit(event, data);
    }
};
