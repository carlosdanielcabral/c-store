import Connection from "../../../../database/Connection";
import UserDAO from "../../DAO/User.dao";
import CreateSalerDAO from "../DTO/Create.dto";
import { Fetch } from "../types";

class SalerDAO extends UserDAO {
  public constructor(
    protected _connection: Connection = new Connection(),
  ) {
    super(_connection);
  }

  public create(saler: CreateSalerDAO): void {
    this.createUser(saler);

    const query = "INSERT INTO saler (id) VALUES (?)";
    const values = [saler.id];

    this._connection.execute(query, values);
  }

  public async getByEmail(email: string): Promise<Fetch> {
    const query = "SELECT u.*, s.client_id FROM saler s INNER JOIN user u ON u.id = s.id WHERE u.email = ?";
    const values = [email];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  }
}

export default SalerDAO;
