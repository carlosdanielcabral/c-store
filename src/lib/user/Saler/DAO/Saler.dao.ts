import Connection from '../../../../database/Connection';
import UserDAO from '../../DAO/User.dao';
import CreateSalerDTO from '../DTO/Create.dto';
import UpdateSalerDTO from '../DTO/Update.dto';
import { Fetch } from '../types';

class SalerDAO extends UserDAO {
  public constructor(protected _connection: Connection = new Connection()) {
    super(_connection);
  }

  public create(saler: CreateSalerDTO): void {
    this.createUser(saler);

    const query = 'INSERT INTO saler (id) VALUES (?)';
    const values = [saler.id];

    this._connection.execute(query, values);
  }

  public async getByEmail(email: string): Promise<Fetch> {
    const query =
      'SELECT u.*, s.client_id FROM saler s INNER JOIN user u ON u.id = s.id WHERE u.email = ?';
    const values = [email];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  }

  public getById = async (id: string): Promise<Fetch> => {
    const query =
      'SELECT u.*, s.client_id FROM saler s INNER JOIN user u ON u.id = s.id WHERE u.id = ?';
    const values = [id];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  };

  public update = async (admin: UpdateSalerDTO): Promise<void> => {
    await this.updateUser(admin);

    const query = 'UPDATE saler SET client_id = ? WHERE id = ?';
    const values = [admin.clientId, admin.id];

    await this._connection.execute(query, values);
  };

  public remove = async (id: string): Promise<void> => {
    const query = 'DELE FROM saler WHERE id = ?';
    const values = [id];

    await this._connection.execute(query, values);
    await this.deleteUser(id);
  };
}

export default SalerDAO;
