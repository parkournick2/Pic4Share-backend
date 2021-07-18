import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { user, userLogin } from "../models/userModels";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const input: user = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        nickname: req.body.nickname,
      };
      const token = await UserBusiness.signup(input);
      res.status(200).send({ token });
    } catch (error) {
      if (error.sqlMessage) {
        if (error.sqlMessage.includes("' for key 'users.nickname'")) {
          res.status(400).send({ error: "nickname já cadastrado" });
        }
        if (error.sqlMessage.includes("' for key 'users.email'")) {
          res.status(400).send({ error: "email já cadastrado" });
        }
      }
      res.status(400).send({ error: error.message });
    }
  };
  login = async (req: Request, res: Response) => {
    try {
      const input: userLogin = {
        nickname: req.body.nickname,
        password: req.body.password,
      };
      const token = await UserBusiness.login(input);
      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}
