import UserDAO from '../DAO/User.dao';
import CreateUserDTO from '../DTO/CreateUser.dto';
import UpdateUserDTO from '../DTO/UpdateUser.dto';
import User from '../User';

abstract class UserRepository {
  public constructor(protected _dao: UserDAO) {}

  public abstract getByEmail(email: string): Promise<User>;

  public abstract getById(id: string): Promise<User>;

  public abstract create(dto: CreateUserDTO): Promise<User>;

  public abstract update(dto: UpdateUserDTO): Promise<User>;
}

export default UserRepository;
