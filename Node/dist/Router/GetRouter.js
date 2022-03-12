"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMethodUnits = void 0;
var GetMethodUnits = [];
exports.GetMethodUnits = GetMethodUnits;
const landingWork = {
    path: '/',
    work: (req, res) => {
        res.send("Hello");
    }
};
GetMethodUnits.push(landingWork);
