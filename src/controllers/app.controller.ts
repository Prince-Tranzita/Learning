import { NextFunction, Request, Response } from "express";
import { health } from "../config/health";

export const backendStatus = async (_req: Request, res: Response ) => {
   return res.status(200).json({
      success: true,
      message: "Backend in working fine"
   })
};

export const notFound = async (_req: Request, res: Response) => {
   return res.status(404).json({ message: "Oops 404 not found"})
};

export const getSystemHealthData = async (_req: Request, res: Response, next: NextFunction) => {
   try {
      const healthData = {
         application: health.getApplicationHealth(),
         system: health.getSystemHealth(),
         timeStamp: Date.now()
      }
      return res.status(200).json({
         success: true,
         healthData
      })
   } catch (error) {
      return next(error);
   }
}