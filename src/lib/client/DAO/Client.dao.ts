import Connection from '../../../database/Connection';
import CreateClientDTO from '../DTO/CreateClient.dto';
import { Fetch } from '../types';

class ClientDAO {
  public constructor(private _connection: Connection = new Connection()) {}

  public create = async (client: CreateClientDTO): Promise<void> => {
    const query =
      'INSERT INTO client (id, name, cnpj, created_at) VALUES (?, ?, ?, NOW())';
    const values = [client.id, client.name, client.cnpj];

    await this._connection.execute(query, values);
  };

  public getById = async (id: string): Promise<Fetch> => {
    const query = 'SELECT * FROM client WHERE id = ?';
    const values = [id];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  };
}

export default ClientDAO;
