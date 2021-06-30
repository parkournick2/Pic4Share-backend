import UserDatabase from "../data/UserDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { NotFoundError } from "../error/NotFoundError";
import Authenticator from "../middlewares/Authenticator";
import HashManager from "../middlewares/HashManager";
import { user, userLogin } from "../models/userModels";

class UserBusiness {
  signup = async (user: user) => {
    if (!user.email || !user.name || !user.password || !user.nickname) {
      throw new InvalidInputError(
        "Preencha os campos 'email', 'name', 'password', 'nickname'"
      );
    }
    if (user.password.length < 6) {
      throw new InvalidInputError("A senha deve ter mais que 6 caracteres");
    }
    await UserDatabase.createUser(user);
    return Authenticator.generateToken({ nickname: user.nickname });
  };

  login = async (user: userLogin) => {
    if (!user.nickname || !user.password) {
      throw new InvalidInputError("Preencha os campos 'nickname', 'password'");
    }
    const result = await UserDatabase.getUserByNickname(user.nickname);
    if (!result) {
      throw new NotFoundError("Usuario não encontrado");
    }
    if (!HashManager.compare(user.password, result.password)) {
      throw new InvalidInputError("Senha inválida");
    }
    return Authenticator.generateToken({ nickname: user.nickname });
  };
}

export default new UserBusiness();
