"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_1 = require("../database/firebase");
const database_1 = require("firebase/database");
const moment_1 = __importDefault(require("moment"));
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    // gets user data & pushes on db
    const apiKey = req.headers.apikey;
    if (!apiKey)
        return res.send(`apiKey missing`);
    axios_1.default.get(`https://api.ipdata.co/?api-key=${apiKey}`)
        .then((r) => {
        const dateTime = (0, moment_1.default)().utcOffset("+05:30").format('h:mm A, Do MMMM YYYY');
        const dataObj = { date: dateTime, info: r.data };
        (0, database_1.goOnline)(firebase_1.database);
        (0, database_1.push)((0, database_1.ref)(firebase_1.database, "users"), dataObj)
            .then(() => res.send({ msg: `Success` }))
            .catch(e => res.send({ msg: e.message }));
    })
        .catch(e => res.send({ msg: e.message }));
});
exports.default = router;
