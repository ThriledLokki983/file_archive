/** @format */

import { Request, Response, NextFunction } from "express";
import Files from "../models/fileModel";
import { BadRequestError } from "../helpers/apiError";
import FileServices from "../services/file";

export const createFile = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { description, author } = req.body;
		const file = new Files({
			description,
			author,
		});
		await FileServices.create(file);
		res.json(file);
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", error));
		} else {
			next(error);
		}
	}
};

//PUT /movies/:movieId
export const updateFile = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const update = req.body;
		const fileId = req.params.fileId;
		const updateFile = await FileServices.update(fileId, update);
		res.json(updateFile);
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", error));
		} else {
			next(Error);
		}
	}
};

// Delete  //Id
export const deleteFile = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await FileServices.deleteFile(req.params.fileId);
		res.status(204).end();
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", error));
		} else {
			next(error);
		}
	}
};

// GET /Id
export const findById = async (req: Request, res: Response, next: NextFunction) => {
	try {
		res.json(await FileServices.findById(req.params.fileId));
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", error));
		} else {
			next(error);
		}
	}
};

// GET /
export const findAll = async (req: Request, res: Response, next: NextFunction) => {
	try {
		res.json(await FileServices.findAll());
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", error));
		} else {
			next(error);
		}
	}
};
