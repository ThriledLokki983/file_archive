"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var fileSchema = new mongoose_1["default"].Schema({
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: String
    }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("File", fileSchema);
