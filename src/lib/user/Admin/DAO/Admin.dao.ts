import Connection from '../../../../database/Connection';
import UserDAO from '../../DAO/User.dao';
import CreateAdminDTO from '../DTO/Create.dto';
import UpdateAdminDTO from '../DTO/Update.dto';
import { Fetch } from '../types';

class AdminDAO extends UserDAO {
  public constructor(protected _connection: Connection = new Connection()) {
    super(_connection);
  }

  public create = async (admin: CreateAdminDTO): Promise<void> => {
    await this.createUser(admin);

    const query = 'INSERT INTO admin (id, client_id) VALUES (?, ?)';
    const values = [admin.id, admin.clientId];

    await this._connection.execute(query, values);
  };

  public getByEmail = async (email: string): Promise<Fetch> => {
    const query =
      'SELECT u.*, a.client_id FROM admin a INNER JOIN user u ON u.id = admin.id WHERE u.email = ?';
    const values = [email];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  };

  public getById = async (id: string): Promise<Fetch> => {
    const query =
      'SELECT u.*, a.client_id FROM admin a INNER JOIN user u ON u.id = admin.id WHERE u.id = ?';
    const values = [id];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  };

  public update = async (admin: UpdateAdminDTO): Promise<void> => {
    await this.updateUser(admin);

    const query = 'UPDATE admin SET client_id = ? WHERE id = ?';
    const values = [admin.clientId, admin.id];

    await this._connection.execute(query, values);
  };

  public remove = async (id: string): Promise<void> => {
    const query = 'DELE FROM admin WHERE id = ?';
    const values = [id];

    await this._connection.execute(query, values);
    await this.deleteUser(id);
  };
}

export default AdminDAO;
