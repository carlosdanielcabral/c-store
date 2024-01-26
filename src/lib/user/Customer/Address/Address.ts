import { Fetch, Json } from "./types";

class UserCustomerAddress {
  public constructor(
    private _id: number,
    private _address: string,
    private _city: string,
    private _state: string,
    private _cep: string,
    private _createdAt: Date,
    private _deletedAt?: Date,
  ) {}

  get id(): number {
    return this._id;
  }

  get address(): string {
    return this._address;
  }

  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }

  get cep(): string {
    return this._cep;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get deletedAt(): Date | undefined {
    return this._deletedAt;
  }

  public static fromFetch = (fetch: Fetch): UserCustomerAddress => {
    return new UserCustomerAddress(
      fetch.id,
      fetch.address,
      fetch.city,
      fetch.state,
      fetch.cep,
      new Date(fetch.created_at),
      new Date(fetch.deleted_at),
    );
  }

  public json = (): Json => {
    return {
      id: this.id,
      address: this.address,
      city: this.city,
      state: this.state,
      cep: this.cep,
      createdAt: this.createdAt.toISOString(),
      deletedAt: this.deletedAt?.toISOString(),
    };
  }
}

export default UserCustomerAddress;
