import PaymentMethodDAO from '../DAO/PaymentMethod.dao';
import PaymentMethod from '../PaymentMethod';

class PaymentMethodRepository {
  public constructor(
    protected _dao: PaymentMethodDAO = new PaymentMethodDAO(),
  ) {}

  public getById = async (id: number): Promise<PaymentMethod> => {
    const fetch = await this._dao.getById(id);

    return PaymentMethod.fromFetch(fetch);
  };

  public getAllByClient = async (
    clientId: string,
  ): Promise<PaymentMethod[]> => {
    const fetch = await this._dao.getAllByClient(clientId);

    return fetch.map(data => PaymentMethod.fromFetch(data));
  };
}

export default PaymentMethodRepository;
