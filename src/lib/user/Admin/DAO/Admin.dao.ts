import Connection from "../../../../database/Connection";
import UserDAO from "../../DAO/User.dao";
import CreateAdminDTO from "../DTO/Create.dto";
import { Fetch } from "../types";

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

  public async getByEmail(email: string): Promise<Fetch> {
    const query = "SELECT u.*, a.client_id FROM admin a INNER JOIN user u ON u.id = admin.id WHERE u.email = ?";
    const values = [email];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  }
}

export default AdminDAO;
