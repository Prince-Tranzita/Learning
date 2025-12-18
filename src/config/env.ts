import 'dotenv/config';


export const ENV: any = {
   PORT: Number(process.env.PORT!),
   NODE_ENV: process.env.NODE_ENV! || "development"
}