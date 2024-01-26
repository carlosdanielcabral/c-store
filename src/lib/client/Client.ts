import PaymentMethod from '../payment-method/PaymentMethod';
import ClientPaymentMethodProxy from '../payment-method/Proxy/ClientPaymentMethod.proxy';
import { Fetch } from './types';

class Client {
  public constructor(
    private _id: string,
    private _name: string,
    private _cnpj: string,
    private _createdAt: Date,
    private _deletedAt?: Date,
    private _paymentMethods?:
      | ClientPaymentMethodProxy
      | Promise<PaymentMethod[]>,
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get cnpj(): string {
    return this._cnpj;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get deletedAt(): Date | undefined {
    return this._deletedAt;
  }

  get paymentMethods(): PaymentMethod[] {
    if (this._paymentMethods instanceof ClientPaymentMethodProxy)
      this._paymentMethods = this._paymentMethods.realPaymentMethods();

    return this.paymentMethods;
  }

  public static fromFetch(fetch: Fetch): Client {
    return new Client(
      fetch.id,
      fetch.name,
      fetch.cnpj,
      new Date(fetch.created_at),
      new Date(fetch.deleted_at),
      new ClientPaymentMethodProxy(fetch.id),
    );
  }
}

export default Client;
