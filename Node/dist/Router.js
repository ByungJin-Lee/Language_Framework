"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRouter = void 0;
const express = require("express");
const GetRouter_1 = require("./Router/GetRouter");
const GetRouter = ({ IsDelete, IsPost, IsPut, IsGet }) => {
    const router = express.Router();
    if (IsGet)
        GetRouter_1.GetMethodUnits.forEach(v => router.route(v.path).get(v.work));
    return router;
};
exports.GetRouter = GetRouter;
