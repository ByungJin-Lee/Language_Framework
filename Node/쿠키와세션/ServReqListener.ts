import { RequestListener } from "http";

interface CookieObjType{
    [key: string]: string
}

const parseCookie = (cookie : string = '') : CookieObjType => 
    cookie
        .split(';')
        .map(v=> v.split('='))
        .map(([k, ...vs])=>[k, vs.join('=')])
        .reduce((acc : CookieObjType, [k,v])=>{
            acc[k] = v;
            return acc;
        }, {});

const ReqListener : RequestListener = function(req, res){
    console.log(parseCookie(req.headers.cookie));
    res.writeHead(200, {'Set-Cookie': 'Mycookie=test'});
    res.end("Hello");
}

module.exports.ServReqListener = ReqListener;
module.exports.ParseCookie = parseCookie;
