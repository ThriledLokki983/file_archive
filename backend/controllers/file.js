"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.findAll = exports.findById = exports.deleteFile = exports.updateFile = exports.createFile = void 0;
var file_1 = require("../models/file");
var apiError_1 = require("../helpers/apiError");
var file_2 = require("../services/file");
var createFile = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, description, author, file, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, description = _a.description, author = _a.author;
                file = new file_1["default"]({
                    description: description,
                    author: author
                });
                return [4 /*yield*/, file_2["default"].create(file)];
            case 1:
                _b.sent();
                res.json(file);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                if (error_1 instanceof Error && error_1.name == "ValidationError") {
                    next(new apiError_1.BadRequestError("Invalid Request", error_1));
                }
                else {
                    next(error_1);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createFile = createFile;
//PUT /movies/:movieId
var updateFile = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var update, fileId, updateFile_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                update = req.body;
                fileId = req.params.fileId;
                return [4 /*yield*/, file_2["default"].update(fileId, update)];
            case 1:
                updateFile_1 = _a.sent();
                res.json(updateFile_1);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                if (error_2 instanceof Error && error_2.name == "ValidationError") {
                    next(new apiError_1.BadRequestError("Invalid Request", error_2));
                }
                else {
                    next(Error);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateFile = updateFile;
// Delete /videoGames //:videoGamesId
var deleteFile = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, file_2["default"].deleteFile(req.params.fileId)];
            case 1:
                _a.sent();
                res.status(204).end();
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                if (error_3 instanceof Error && error_3.name == "ValidationError") {
                    next(new apiError_1.BadRequestError("Invalid Request", error_3));
                }
                else {
                    next(error_3);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteFile = deleteFile;
// GET /videoGames/:videoGamesId
var findById = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, file_2["default"].findById(req.params.fileId)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _c.sent();
                if (error_4 instanceof Error && error_4.name == "ValidationError") {
                    next(new apiError_1.BadRequestError("Invalid Request", error_4));
                }
                else {
                    next(error_4);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findById = findById;
// GET / videoGames
var findAll = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_5;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, file_2["default"].findAll()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _c.sent();
                if (error_5 instanceof Error && error_5.name == "ValidationError") {
                    next(new apiError_1.BadRequestError("Invalid Request", error_5));
                }
                else {
                    next(error_5);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findAll = findAll;
