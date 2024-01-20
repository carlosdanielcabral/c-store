import Connection from "../../../database/Connection";
import CreateUserDTO from "../DTO/CreateUser.dto";

class UserDAO {
  public constructor(
    protected _connection: Connection = new Connection(),
  ) {}

  public createUser(user: CreateUserDTO): void {
    const query = "INSERT INTO client (id, name, last_name, email, password, image) VALUES (?, ?, ?, ?, ?, ?, NOW())";
    const values = [user.id, user.name, user.lastname, user.email, user.password, user.image];

    this._connection.execute(query, values);
  }
}

export default UserDAO;
