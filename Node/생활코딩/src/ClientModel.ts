/**
 * Default Host : LocalHost / Method : GET
 */
const SetTargetServer = (host : string = "localhost", method : string = "GET")=>(data : any)=>fetch(host, {method, body : data})

const ThrowData = SetTargetServer()