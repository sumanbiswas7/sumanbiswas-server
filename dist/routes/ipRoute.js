"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_1 = require("../database/firebase");
const database_1 = require("firebase/database");
const dotenv = __importStar(require("dotenv"));
const moment_1 = __importDefault(require("moment"));
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
dotenv.config();
router.post("/", (req, res) => {
    // gets user data & pushes on db
    const apiKey = process.env.apiKey;
    axios_1.default.get(`https://api.ipdata.co/?api-key=${apiKey}`)
        .then((r) => {
        const dateTime = (0, moment_1.default)().format('h:mm A, Do MMMM YYYY');
        const dataObj = { date: dateTime, info: r.data };
        (0, database_1.push)((0, database_1.ref)(firebase_1.database, "users"), dataObj)
            .then(() => res.send(r.data))
            .catch(e => res.send(e));
    })
        .catch(e => res.send(e));
});
exports.default = router;
