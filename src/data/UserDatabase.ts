import HashManager from "../middlewares/HashManager";
import IdGenerator from "../middlewares/IdGenerator";
import { user } from "../models/userModels";
import connection from "./connection";

class UserDatabase {
  tableName: string;

  constructor(tableName: string = "user") {
    this.tableName = tableName;
  }

  getUserByNickname = async (nickname: string) => {
    const [result] = await connection.raw(`
      SELECT * FROM ${this.tableName} WHERE nickname = '${nickname}';
    `);
    return result[0];
  };

  createUser = async (user: user) => {
    await connection.raw(`
    INSERT INTO
      user (id, nickname, name, password, email)
    VALUES
    (
      '${IdGenerator.generate()}',
      '${user.nickname}',
      '${user.name}',
      '${HashManager.hash(user.password)}',
      '${user.email}'
    );
    `);
  };
}

export default new UserDatabase();
