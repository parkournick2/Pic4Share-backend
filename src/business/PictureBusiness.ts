import PictureDatabase from "../data/PictureDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { createPictureDTO } from "../models/pictureModels";

class PictureBusiness {
  createPicture = async (picture: createPictureDTO) => {
    if (!picture.title || !picture.user_nickname || !picture.url || !picture.tags || !picture.album_id) {
      throw new InvalidInputError(
        "Preencha os campos 'title', 'tags', 'url', 'albumId'"
      );
    }
    await PictureDatabase.createPicture(picture);
    return "Imagem criada com sucesso!";
  };
}

export default new PictureBusiness();
