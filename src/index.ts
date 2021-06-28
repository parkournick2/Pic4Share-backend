import { Request, Response } from "express";
import app from "./app";

app.get('/ping', (req: Request, res: Response)=>{
  res.send('pong')
})