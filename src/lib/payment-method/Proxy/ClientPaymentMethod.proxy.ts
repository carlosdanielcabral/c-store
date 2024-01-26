import PaymentMethod from '../PaymentMethod';
import PaymentMethodRepository from '../Repository/PaymentMethod.repository';

class ClientPaymentMethodProxy {
  public constructor(
    private _clientId: string,
    private _repository: PaymentMethodRepository = new PaymentMethodRepository(),
  ) {}

  public realPaymentMethods = (): Promise<PaymentMethod[]> => {
    return this._repository.getAllByClient(this._clientId);
  };
}

export default ClientPaymentMethodProxy;
