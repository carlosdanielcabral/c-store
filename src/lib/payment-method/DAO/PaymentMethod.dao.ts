import Connection from '../../../database/Connection';
import { Fetch } from '../types';

class PaymentMethodDAO {
  public constructor(protected _connection: Connection = new Connection()) {}

  public getById = async (id: number): Promise<Fetch> => {
    const query = 'SELECT * FROM payment_method WHERE id = ?';
    const values = [id];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch;
  };

  public getAllByClient = async (clientId: string): Promise<Fetch[]> => {
    const query = `
      SELECT pm.*
      FROM payment_method pm
      INNER JOIN client_payment_method cpm
        ON cpm.payment_method_id = pm.id
      WHERE cpm.client_id = ?
    `;
    const values = [clientId];

    const [result] = await this._connection.execute(query, values);

    return result as unknown as Fetch[];
  };
}

export default PaymentMethodDAO;
