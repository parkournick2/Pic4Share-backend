import IdGenerator from "../middlewares/IdGenerator";
import { createPictureDTO } from "../models/pictureModels";
import connection from "./connection";

class PictureDatabase {
  tableName: string;

  constructor(tableName: string = "picture") {
    this.tableName = tableName;
  }

  getAllPictures = async () => {
    const [result] = await connection.raw(`
      SELECT * FROM ${this.tableName}
    `);
    return result;
  };

  createPicture = async (picture: createPictureDTO) => {
    await connection.raw(`
    INSERT INTO
    picture (
      id,
      title,
      user_nickname,
      tags,
      url,
      album_id,
      date
    )
    VALUES
    (
      '${IdGenerator.generate()}',
      '${picture.title}',
      '${picture.user_nickname}',
      '${picture.tags}',
      '${picture.url}',
      '${picture.album_id}',
      NOW()
    );
    `);
    await connection.raw(`
    UPDATE
      album
    SET
      background = '${picture.url}'
    WHERE
      id = '${picture.album_id}';
    `);
  };
}

export default new PictureDatabase();
