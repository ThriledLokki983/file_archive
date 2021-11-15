/** @format */

import { Document, Schema, model } from "mongoose";

export type FileDocument = Document & {
	id: string;
	description: string;
	author: string;
};

const fileSchema = new Schema(
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
export default model<FileDocument>("File", fileSchema);
