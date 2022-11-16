"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const viewsRoute_1 = __importDefault(require("./routes/viewsRoute"));
const ipRoute_1 = __importDefault(require("./routes/ipRoute"));
const app = (0, express_1.default)();
app.get("/", (req, res) => res.send("sumanbiswas-server"));
app.use("/views", viewsRoute_1.default);
app.use("/ip", ipRoute_1.default);
const PORT = process.env.PORT || 3999;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
