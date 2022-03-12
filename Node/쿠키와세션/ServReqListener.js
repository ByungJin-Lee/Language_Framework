"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseCookie = (cookie = '') => cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc;
}, {});
const ReqListener = function (req, res) {
    console.log(parseCookie(req.headers.cookie));
    res.writeHead(200, { 'Set-Cookie': 'Mycookie=test' });
    res.end("Hello");
};
module.exports.ServReqListener = ReqListener;
module.exports.ParseCookie = parseCookie;
