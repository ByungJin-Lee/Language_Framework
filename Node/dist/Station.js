"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenAppWork = exports.PreviousAppWork = void 0;
const express = require("express");
const PORT = 8080;
const PreviousAppWork = () => {
    var app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    return app;
};
exports.PreviousAppWork = PreviousAppWork;
const ListenAppWork = (app, afterWork = (PORT) => console.log("Run At " + PORT)) => {
    app.listen(PORT, () => afterWork(PORT));
};
exports.ListenAppWork = ListenAppWork;
