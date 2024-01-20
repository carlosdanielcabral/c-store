import Connection from "../../../../database/Connection";
import UserDAO from "../../DAO/User.dao";
import CreateCustomerDTO from "../DTO/Create.dto";
import { Fetch } from "../types";

class CustomerDAO extends UserDAO {
  public constructor(
    protected _connection: Connection = new Connection(),
  ) {
    super(_connection);
  }

  public create(customer: CreateCustomerDTO): void {
    this.createUser(customer);

    const query = "INSERT INTO customer (id) VALUES (?)";
    const values = [customer.id];

    this._connection.execute(query, values);
  }

  public async getByEmail(email: string): Promise<Fetch> {
    const query = "SELECT u.*, c.client_id FROM client c INNER JOIN user u ON u.id = c.id WHERE u.email = ?";
    const values = [email];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  }
}

export default CustomerDAO;
