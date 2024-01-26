import { Fetch } from './types';

class Client {
  public constructor(
    private _id: string,
    private _name: string,
    private _cnpj: string,
    private _createdAt: Date,
    private _deletedAt?: Date,
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

  public static fromFetch(fetch: Fetch): Client {
    return new Client(
      fetch.id,
      fetch.name,
      fetch.cnpj,
      new Date(fetch.created_at),
      new Date(fetch.deleted_at),
    );
  }
}

export default Client;
