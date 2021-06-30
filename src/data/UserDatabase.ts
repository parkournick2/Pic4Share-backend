import HashManager from "../middlewares/HashManager";
import { user } from "../models/userModels";
import connection from "./connection";

class UserDatabase {
  tableName: string;

  constructor(tableName: string = "users") {
    this.tableName = tableName;
  }

  getUserByNickname = async (nickname: string) => {
    const [result] = await connection.raw(`
      SELECT * FROM ${this.tableName} WHERE nickname = '${nickname}';
    `);
    return result[0];
  }

  createUser = async (user: user) => {
    await connection.raw(`
      INSERT INTO ${this.tableName} (nickname, email, name, password) VALUES (
        '${user.nickname}',
        '${user.email}',
        '${user.name}',
        '${HashManager.hash(user.password)}'
      );
    `);
  };
}

export default new UserDatabase();
