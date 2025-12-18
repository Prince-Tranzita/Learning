import { Request, Response } from "express";

export const backendStatus = async (_req: Request, res: Response ) => {
   return res.status(200).json({
      success: true,
      message: "Backend in working fine"
   })
};

export const notFound = async (_req: Request, res: Response) => {
   return res.status(404).json({ message: "Oops 404 not found"})
}