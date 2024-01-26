import Connection from '../../../database/Connection';
import CreateClientDTO from '../DTO/CreateClient.dto';

class ClientDAO {
  public constructor(private _connection: Connection = new Connection()) {}

  public create(client: CreateClientDTO): void {
    const query =
      'INSERT INTO client (id, name, cnpj, created_at) VALUES (?, ?, ?, NOW())';
    const values = [client.id, client.name, client.cnpj];

    this._connection.execute(query, values);
  }
}

export default ClientDAO;
