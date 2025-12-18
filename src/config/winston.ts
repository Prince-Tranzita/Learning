import winston, { format, transports } from "winston";

const logger: winston.Logger = winston.createLogger({
   level: "info",
   format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}),
      format.printf(({ timestamp, level, message}) => (
         `${timestamp} [${level}] ${message}`
      ))
   ),
   transports: [
      new transports.Console(),
      new transports.File({ filename: "logs/backendLogs.log"})
   ]
});

export default logger;