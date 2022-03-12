"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReqListener = function (req, res) {
    res.write("<h1> Hello World ~!</h1>");
    res.end("<h2>Welcome!</h2>");
};
module.exports.ServReqListener = ReqListener;
