import IdGenerator from "../middlewares/IdGenerator";
import { createPictureDTO } from "../models/pictureModels";
import connection from "./connection";

class PictureDatabase {
  tableName: string;

  constructor(tableName: string = "pictures") {
    this.tableName = tableName;
  }

  getAllPictures = async () => {
    const [result] = await connection.raw(`
      SELECT * FROM ${this.tableName}
    `);
    return result;
  }

  createPicture = async (picture: createPictureDTO) => {
    const id = IdGenerator.generate();
    await connection.raw(`
      INSERT INTO ${this.tableName} (id, subtitle, author, date, file, tags ) VALUES (
        "${id}",
        "${picture.subtitle}",
        "${picture.author}",
        "${Date.now()}",
        "${picture.file}",
        "${picture.tags}"
      );
    `);
  };
}

export default new PictureDatabase();
