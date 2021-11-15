"use strict";
exports.__esModule = true;
var express = require("express");
var fileRouter_1 = require("./routers/fileRouter");
var app = express();
var PORT = 8080;
app.get("/", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World</h1>");
});
app.use("/api/v1/files", fileRouter_1["default"]);
app.listen(PORT, function () { return console.log("app running on port " + PORT); });
