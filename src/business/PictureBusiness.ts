import PictureDatabase from "../data/PictureDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { createPictureDTO, searchPictureDTO } from "../models/pictureModels";

class PictureBusiness {
  createPicture = async (picture: createPictureDTO) => {
    if (
      !picture.title ||
      !picture.user_nickname ||
      !picture.url ||
      !picture.tags ||
      !picture.album_id
    ) {
      throw new InvalidInputError(
        "Preencha os campos 'title', 'tags', 'url', 'albumId'"
      );
    }
    await PictureDatabase.createPicture(picture);
    return "Imagem criada com sucesso!";
  };
  searchPicture = async (input: searchPictureDTO) => {
    if (!input.album_id) {
      throw new InvalidInputError("Preencha os campos 'albumId'");
    }
    const result = await PictureDatabase.searchPicture(input);
    return result;
  };
}

export default new PictureBusiness();
