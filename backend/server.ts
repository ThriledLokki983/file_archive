/** @format */

import mongoose from "mongoose";

import app from "./app";

// const DB = MONGODB_URI.replace('<password>', DB_PASSWORD)
let client: any;

mongoose
	.connect("DB" as string, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		// Start Express server
		console.log("DB CONNECTION SUCCESSFUL!!!");
		client = app.listen(app.get("port"), () => {
			console.log(
				"  App is running at http://localhost:%d in %s mode",
				app.get("port"),
				app.get("env")
			);
			console.log("  Press CTRL-C to stop\n");
		});
	})
	.catch((err: Error) => {
		console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
		process.exit(1);
	});
