import AlbumDatabase from "../data/AlbumDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { createAlbumDTO } from "../models/albumModels";

class AlbumBusiness {
  createAlbum = async (album: createAlbumDTO) => {
    if (!album.name) {
      throw new InvalidInputError("Preencha os campos 'name'");
    }
    await AlbumDatabase.createAlbum(album);
    return "Album criado com sucesso!";
  };
}

export default new AlbumBusiness();
