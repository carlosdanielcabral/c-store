import Connection from "../../../database/Connection";
import CreateUserDTO from "../DTO/CreateUser.dto";
import UpdateUserDTO from "../DTO/UpdateUser.dto";

class UserDAO {
  public constructor(
    protected _connection: Connection = new Connection(),
  ) {}

  public createUser = async (user: CreateUserDTO): Promise<void> => {
    const query = "INSERT INTO user (id, name, last_name, email, password, image) VALUES (?, ?, ?, ?, ?, ?, NOW())";
    const values = [user.id, user.name, user.lastname, user.email, user.password, user.image];

    await this._connection.execute(query, values);
  }

  public updateUser = async (user: UpdateUserDTO): Promise<void> => {
    const query = "UPDATE user SET  name = ?, last_name = ?, email = ?, password = ?, image = ?) WHERE id = ?";
    const values = [user.name, user.lastname, user.email, user.password, user.image, user.id];

    await this._connection.execute(query, values);
  }

  public deleteUser = async (id: string): Promise<void> => {
    const query = "DELETE FROM user WHERE id = ?";
    const values = [id];

    await this._connection.execute(query, values);
  }
}

export default UserDAO;
