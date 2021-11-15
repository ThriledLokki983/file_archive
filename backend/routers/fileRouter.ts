import express from "express";

import {
  createFile,
  updateFile,
  deleteFile,
  findById,
  findAll,
} from "../controllers/file";

const router = express.Router();

router.get("/", findAll);
router.get("/:fileId", findById);
router.put("/:fileId", updateFile);
router.delete("/:fileId", deleteFile);
router.post("/", createFile);

export default router;
