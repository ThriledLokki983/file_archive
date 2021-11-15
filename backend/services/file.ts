import File, { FileDocument } from "../models/file";
import { NotFoundError } from "../helpers/apiError";

const create = async (file: FileDocument): Promise<FileDocument> => {
  return file.save();
};

const findById = async (fileId: string): Promise<FileDocument> => {
  const foundFile = await File.findById(fileId);
  if (!foundFile) {
    throw new NotFoundError(`File ${fileId} not found`);
  }
  return foundFile;
};

const findAll = async (): Promise<FileDocument[]> => {
  return File.find().sort({ name: 1, releasedYear: -1 });
};

const update = async (
  fileId: string,
  update: Partial<FileDocument>
): Promise<FileDocument | null> => {
  const foundFile = await File.findByIdAndUpdate(fileId, update, {
    new: true,
  });
  if (!foundFile) {
    throw new NotFoundError(`File ${fileId} not found`);
  }
  return foundFile;
};

const deleteFile = async (fileId: string): Promise<FileDocument | null> => {
  const foundFile = File.findByIdAndDelete(fileId);

  if (!foundFile) {
    throw new NotFoundError(`File ${fileId} not found`);
  }
  return foundFile;
};

export default {
  create,
  findById,
  findAll,
  update,
  deleteFile,
};
