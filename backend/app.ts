/** @format */

import express, { Request, Response, NextFunction } from "express";
import fileRouter from "./src/routers/fileRouter";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
const app = express();

app.set("port", process.env.PORT || 8080);

app.use("/api/v1/files", fileRouter);

app.listen("port", () => console.log(`app running on port ${process.env.PORT}`));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
	next(new Error(`Can't find ${req.originalUrl} on this server!`));
});

// export default app;
export default app;
