"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    console.log("hiya");
});
router.get("/", (req, res) => {
    res.send(`<h2>views page</h2>`);
});
exports.default = router;
