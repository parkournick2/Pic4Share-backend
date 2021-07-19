import express from"express";
import UserController from "../controllers/UserController";

const userRouter = express.Router();

userRouter.post('/signup', UserController.signup);
userRouter.post('/login', UserController.login);

export default userRouter;