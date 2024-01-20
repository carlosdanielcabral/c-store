import UserDAO from "../DAO/User.dao";
import User from "../User";

abstract class UserRepository {
  public constructor(protected _dao: UserDAO) {}

  public abstract getByEmail(email: string): Promise<User>
}

export default UserRepository;
