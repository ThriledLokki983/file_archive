/** @format */

import express from "express";

import {
	createFile,
	updateFile,
	deleteFile,
	findById,
	findAll,
} from "../controllers/fileController";

const router = express.Router();

router.route("/").get(findAll).post(createFile);
router.route("/:fileId").get(findById).put(updateFile).delete(deleteFile);

export default router;
