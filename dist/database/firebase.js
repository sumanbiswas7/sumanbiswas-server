"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.database = void 0;
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
const firebaseConfig = {
    databaseURL: "https://my-website-f197b-default-rtdb.firebaseio.com/",
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.app = app;
// Initialize Realtime Database and get a reference to the service
const database = (0, database_1.getDatabase)(app);
exports.database = database;
