import { Request, Response } from "express";
import AlbumBusiness from "../business/AlbumBusiness";
import AlbumDatabase from "../data/AlbumDatabase";
import { createAlbumDTO } from "../models/albumModels";

class AlbumController {
  createAlbum = async (req: Request, res: Response) => {
    try {
      const album: createAlbumDTO = {
        name: req.body.name,
      };
      const message = await AlbumBusiness.createAlbum(album);
      res.status(200).send({message});
    } catch (error) {
      if(error.sqlMessage){
        if(error.sqlMessage.includes('album.name')){
          res.status(400).send({ error: 'Esse album já existe'})
        }
      }
      res.status(400).send({ error: error.message });
    }
  };
  getAlbuns = async (req: Request, res: Response) => {
    try {
      const result = await AlbumDatabase.getAlbums();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default new AlbumController();
