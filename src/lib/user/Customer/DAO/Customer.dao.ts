import Connection from "../../../../database/Connection";
import UserDAO from "../../DAO/User.dao";
import CreateCustomerDTO from "../DTO/Create.dto";
import UpdateCustomerDTO from "../DTO/Update.dto";
import { Fetch } from "../types";

class CustomerDAO extends UserDAO {
  public constructor(
    protected _connection: Connection = new Connection(),
  ) {
    super(_connection);
  }

  public create = async (customer: CreateCustomerDTO): Promise<void> => {
    await this.createUser(customer);

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

  public getById = async (id: string): Promise<Fetch> => {
    const query = "SELECT u.*, c.client_id FROM customer c INNER JOIN user u ON u.id = c.id WHERE u.id = ?";
    const values = [id];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  }

  public update = async (admin: UpdateCustomerDTO): Promise<void> => {
    await this.updateUser(admin);
  }

  public remove = async (id: string): Promise<void> => {
    const query = "DELE FROM customer WHERE id = ?";
    const values = [id];

    await this._connection.execute(query, values);
    await this.deleteUser(id);
  }
}

export default CustomerDAO;
