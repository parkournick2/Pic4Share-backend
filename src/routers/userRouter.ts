import express from"express";
import UserController from "../controllers/UserController";

export const userRouter = express.Router();
const controller = new UserController();

userRouter.post('/signup', controller.signup);
userRouter.post('/login', controller.login);