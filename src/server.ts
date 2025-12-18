import { ENV } from './config/env';
import logger, { colorizeLevel } from './config/winston';
import app from './app';



const port: number = ENV.PORT || 4000; 

const server = app.listen(port);

(() => {
   try {
      logger.info(colorizeLevel(`Server is running in ${ENV.NODE_ENV} mode at http://localhost:${port}`));
   } catch (error: unknown) {
      const message  = error instanceof Error ? error.message : "Error occured in server"
      logger.error(message);
      server.close((error: unknown) => {
         if(error && error instanceof Error){
            logger.error(colorizeLevel(error.message));
         } else {
            logger.error("Failed to start the server", error);
         }
      });
      process.exit(1);
   }
})();
