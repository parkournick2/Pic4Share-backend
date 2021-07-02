import PictureDatabase from "../data/PictureDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { createPictureDTO } from "../models/pictureModels";

class PictureBusiness {
  createPicture = async (picture: createPictureDTO) => {
    if (!picture.file || !picture.subtitle || !picture.tags) {
      throw new InvalidInputError(
        "Preencha os campos 'file', 'subtitle', 'tags'"
      );
    }
    await PictureDatabase.createPicture(picture);
    return "Imagem criada com sucesso!";
  };
}

export default new PictureBusiness();
