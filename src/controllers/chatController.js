import Chat from "../models/chat.model.js";

export const getChats = async (req, res) => {
    try {
        const chats = await Chat.find().populate('members', 'username email');
        res.json(chats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createChat = async (req, res) => {
    try {
        const chat = new Chat(req.body);
        await chat.save();
        const populatedChat = await Chat.findById(chat._id).populate('members', 'username email');
        res.json(populatedChat);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
