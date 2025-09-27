import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    name: { type: String },
    isGroup: { type: Boolean, default: false },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
