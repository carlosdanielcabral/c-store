import Connection from "../../../../../database/Connection";
import { Fetch } from "../types";

class UserCustomerAddressDAO {
  public constructor(
    protected _connection: Connection = new Connection(),
  ) {
  }

  public async getAllByUser(id: string): Promise<Fetch[]> {
    const query = "SELECT * FROM user_customer_address WHERE user_id = :id";
    const values = [id];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch[];
  }
}

export default UserCustomerAddressDAO;
