import Message from "../models/message.model.js";

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate('sender', 'username email')
            .sort({ createdAt: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const sendMessage = async (req, res) => {
    try {
        const message = new Message({
            ...req.body,
            chat: req.body.chatId
        });
        await message.save();
        const populatedMessage = await Message.findById(message._id)
            .populate('sender', 'username email');
        res.json(populatedMessage);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
