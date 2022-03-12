const http = require('http')
const {ServReqListener}  = require('./ServReqListener');

//서버 생성 및 요청 응답 리스너 등록
const serv = http.createServer(ServReqListener)

//서버 8080포트 열기
serv.listen(8080, ()=>{
    console.log("Open In 8080");
})
