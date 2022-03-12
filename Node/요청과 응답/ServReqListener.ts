import { RequestListener } from "http";

const ReqListener : RequestListener = function(req, res){
    res.write("<h1> Hello World ~!</h1>")
    res.end("<h2>Welcome!</h2>")
}

module.exports.ServReqListener = ReqListener;