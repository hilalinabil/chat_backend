export const uploadFile = async (file) => {
    console.log("📂 Uploading file:", file.originalname);
    // TODO: integrate with S3 / Cloudinary
    return { url: `/uploads/${file.originalname}` };
};

export const deleteFile = async (url) => {
    console.log("🗑️ Deleting file:", url);
    // TODO: integrate with S3 / Cloudinary
    return true;
};
