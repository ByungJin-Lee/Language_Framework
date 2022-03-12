/**
 * Default Host : LocalHost / Method : GET
 */
const SetTargetServer = (host = "localhost", method = "GET") => (data) => fetch(host, { method, body: data });
const ThrowData = SetTargetServer();
