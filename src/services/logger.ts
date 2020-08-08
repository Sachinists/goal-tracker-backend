const pino = require("pino");
const logger = pino({
  prettyPrint: {
    translateTime: "SYS:standard",
    ignore: "hostname,pid",
  },
  level: "debug",
}, process.stderr);
export default logger;
