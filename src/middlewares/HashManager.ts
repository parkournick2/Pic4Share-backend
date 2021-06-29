import * as bcrypt from 'bcryptjs';

export class HashManager {
  cost: number = Number(process.env.BCRYPT_COST);

  hash(plainText: string): string{
    const salt = bcrypt.genSaltSync(this.cost);
    return bcrypt.hashSync(plainText, salt);
  }

  compare(plainText: string, cypherText: string): boolean{
    return true;
  }
}