import { Request, Response } from "express";
import PictureBusiness from "../business/PictureBusiness";
import PictureDatabase from "../data/PictureDatabase";
import { UnauthorizedError } from "../error/UnauthorizedError";
import Authenticator from "../middlewares/Authenticator";
import { createPictureDTO } from "../models/pictureModels";

export default class PictureController {
  createPicture = async (req: Request, res: Response) => {
    try {
      const tokenData = Authenticator.getData(req.headers.authorization!);
      const input: createPictureDTO = {
        subtitle: req.body.subtitle,
        author: tokenData.nickname,
        file: req.body.file,
        tags: req.body.tags,
      };
      const message = await PictureBusiness.createPicture(input);
      res.status(200).send({ message });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  getAllPictures = async (req: Request, res: Response) => {
    try {
      const tokenData = Authenticator.getData(req.headers.authorization!);
      const result = await PictureDatabase.getAllPictures();
      res.status(200).send({ result });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}
