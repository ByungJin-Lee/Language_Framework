"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviousAppWork = void 0;
const express = require("express");
const PreviousAppWork = () => {
    var app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    return app;
};
exports.PreviousAppWork = PreviousAppWork;
