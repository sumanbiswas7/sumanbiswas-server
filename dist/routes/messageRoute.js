"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateEmail_1 = require("../helpers/validateEmail");
const database_1 = require("firebase/database");
const moment_1 = __importDefault(require("moment"));
const firebase_1 = require("../database/firebase");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    // posts new message to database
    // @params: body: messageObj
    const data = req.body;
    if (!data.message || !data.name || !data.email)
        return res.send({ msg: `error: please fill the form correctly` });
    if (!(0, validateEmail_1.validateEmail)(data.email))
        return res.send({ msg: `err: provide a valid email` });
    data.date = (0, moment_1.default)().utcOffset("+05:30").format('h:mm A, Do MMMM YYYY');
    (0, database_1.goOnline)(firebase_1.database);
    (0, database_1.push)((0, database_1.ref)(firebase_1.database, "/messages"), data)
        .then(() => res.send({ msg: `message sent successfully` }))
        .catch((e) => res.send({ msg: `error: ${e.message}` }));
});
exports.default = router;
