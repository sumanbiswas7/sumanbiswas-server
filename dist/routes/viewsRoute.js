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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("firebase/database");
const firebase_1 = require("../database/firebase");
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // returns total views or 0 
    const db = (0, database_1.getDatabase)(firebase_1.app);
    const data = yield (0, database_1.get)((0, database_1.ref)(db, "/viewss"));
    const response = data.val() || { views: 0 };
    (0, database_1.goOffline)(db);
    return res.send(response);
}));
exports.default = router;
