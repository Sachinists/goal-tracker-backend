import express from "express";
import {HTTPStatusCodes} from "../models/HttpStatusCodes";
import {processingTime} from "../middlewares/ProcessingTime";

const router = express.Router();

router.get("/user", processingTime, (req: any, res: any) => {
  const result = {
    user: "Debjyoti Pandit",
    email: "debjyotipandit35@gmail.com",
  };
  const outTime: number[] = process.hrtime(req.headers.inTime);
  res.headers = {...res.headers, outTime};
  res.status(HTTPStatusCodes.SUCCESS).send(result);
});

export default router;
