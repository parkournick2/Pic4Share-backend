import { Request, Response } from "express";
import AlbumDatabase from "../data/AlbumDatabase";

class AlbumController {
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