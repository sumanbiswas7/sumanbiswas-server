"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const viewsRoute_1 = __importDefault(require("./routes/viewsRoute"));
const app = (0, express_1.default)();
app.use("/views", viewsRoute_1.default);
app.get("/", (req, res) => res.send("sumanbiswas-server"));
const PORT = process.env.port || 3999;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
