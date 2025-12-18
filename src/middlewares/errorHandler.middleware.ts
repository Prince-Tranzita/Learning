import { NextFunction, Request, Response } from "express";
import logger from "../config/winston";

export const errorHandler = async (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
   const message = error instanceof Error ? error.message : "Something went wrong";
   logger.error(message);
   return res.status(500).json({
      success: false,
      message: message
   })
};