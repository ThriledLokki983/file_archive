import mongoose, { Document, Schema } from "mongoose";

export type FileDocument = Document & {
  id: string;
  description: string;
  author: string;
};

const fileSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model<FileDocument>("File", fileSchema);
