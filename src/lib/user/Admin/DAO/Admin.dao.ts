import Connection from "../../../../database/Connection";
import UserDAO from "../../DAO/User.dao";
import CreateAdminDTO from "../../DTO/CreateAdmin.dto";

class AdminDAO extends UserDAO {
  public constructor(
    protected _connection: Connection = new Connection(),
  ) {
    super(_connection);
  }

  public create(admin: CreateAdminDTO): void {
    this.createUser(admin);

    const query = "INSERT INTO admin (id) VALUES (?)";
    const values = [admin.id];

    this._connection.execute(query, values);
  }
}

export default AdminDAO;
