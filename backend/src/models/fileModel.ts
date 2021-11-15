/** @format */

import { Document, Schema, model } from "mongoose";

export type FileDocument = Document & {
	id: string;
	description: string;
	author: string;
};

const fileSchema = new Schema({
	description: {
		type: String,
		required: [true, "Description is required"],
	},
	name: {
		type: String,
		required: [true, "A file must have a name"],
	},
	author: {
		type: String,
		required: [true, "A file must have an author"],
	},
	linkToFile: {
		type: String,
		required: [true, "A file must have a link"],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
export default model<FileDocument>("File", fileSchema);
