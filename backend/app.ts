import * as express from "express";
import fileRouter from "./routers/fileRouter";

const app = express();

const PORT = 8080;

app.get("/", (req: express.Request, res: express.Response) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");
});

app.use("/api/v1/files", fileRouter);

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
