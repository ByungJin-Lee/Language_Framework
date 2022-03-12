"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostReqArray = [];
const SetAppPostReq = (app) => {
    PostReqArray.forEach((value) => app.post(value.path, value.handler));
};
