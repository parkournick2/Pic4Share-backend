import { Request, Response } from "express";
import PictureBusiness from "../business/PictureBusiness";
import PictureDatabase from "../data/PictureDatabase";
import { UnauthorizedError } from "../error/UnauthorizedError";
import Authenticator from "../middlewares/Authenticator";
import { createPictureDTO, searchPictureDTO } from "../models/pictureModels";

class PictureController {
  createPicture = async (req: Request, res: Response) => {
    try {
      const tokenData = Authenticator.getData(req.headers.authorization!);
      const input: createPictureDTO = {
        title: req.body.title,
        user_nickname: tokenData.nickname,
        url: req.body.url,
        tags: req.body.tags,
        album_id: req.body.albumId,
      };
      const message = await PictureBusiness.createPicture(input);
      res.status(200).send({ message });
    } catch (error) {
      if(error.sqlMessage){
        if(error.sqlMessage.includes('picture.title')){
          res.status(400).send({error: 'Já existe uma imagem com esse nome'})
        }
        if(error.sqlMessage.includes('picture.url')){
          res.status(400).send({error: 'Essa imagem já foi postada'})
        }
        if(error.sqlMessage.includes('album_id')){
          res.status(400).send({error: 'Id do album inválido'})
        }
      }
      res.status(400).send({ error: error.message });
    }
  };
  searchPicture = async (req: Request, res: Response) => {
    try {
      const input: searchPictureDTO = {
        album_id: req.body.albumId,
        text: req.body.text || '',
      };
      const result = await PictureBusiness.searchPicture(input);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default new PictureController();
