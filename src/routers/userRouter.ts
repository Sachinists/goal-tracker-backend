import express from "express";
import userController from "../controllers/userController";
import {createUserValidator} from "../middlewares/UserValidators";

const userRouter = express.Router();

userRouter.post("/create-user", createUserValidator, userController.createUser);

export default userRouter;
