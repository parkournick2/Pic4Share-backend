import IdGenerator from "../middlewares/IdGenerator";
import { albumDTO, createAlbumDTO } from "../models/albumModels";
import connection from "./connection";

class AlbumDatabase {
  tableName: string;

  constructor(tableName: string = "picture") {
    this.tableName = tableName;
  }
  createAlbum = async (album: createAlbumDTO) => {
    await connection.raw(`
      INSERT INTO
        album (id, name, background)
      VALUES
      (
        '${IdGenerator.generate()}',
        '${album.name}',
        ''
      );
    `);
  };
  getAlbums = async (): Promise<albumDTO[]> => {
    const [result] = await connection.raw(`
    SELECT
      *
    FROM
      album;
    `);
    const albums = result.map(async (album: any) => {
      const count = await this.getPicturesCount(album.id);
      return { ...album, count };
    });
    return Promise.all(albums);
  };
  private getPicturesCount = async (albumId: string) => {
    const [result] = await connection.raw(`
    SELECT
    COUNT(*) AS count
    FROM
      picture
    WHERE album_id = '${albumId}';  
    `);
    return result[0].count;
  };
}

export default new AlbumDatabase();
