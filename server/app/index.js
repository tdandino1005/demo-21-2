import initConn from "./conn.js";
import initServer from "./server.js";

const conn = initConn();
const server = initServer(conn);
