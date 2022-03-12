const http = require('http');
const {ServReqListener} = require('./ServReqListener')

const serv = http.createServer(ServReqListener);

serv.listen(8080, ()=>{
    console.log("8080", "Listen");
})