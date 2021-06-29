import { user } from "../models/userModels";
import connection from "./connection";

export class userDatabase {
  tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  createUser = async (user: user) => {
    connection.raw(`
      INSERT INTO ${this.tableName} (nickname, email, name, password) VALUES (
        '${user.nickname}',
        '${user.email}',
        '${user.name}',
        '${user.password}'
      );
    `);
  };
}
