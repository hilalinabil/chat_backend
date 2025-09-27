import mongoose from "mongoose";

const attachmentSchema = new mongoose.Schema({
    message: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
    url: { type: String, required: true },
    type: { type: String, enum: ["image", "video", "file"], required: true },
}, { timestamps: true });

const Attachment = mongoose.model("Attachment", attachmentSchema);
export default Attachment;
