import User from "../User";
import { Fetch, Json } from "./types";

class Saler extends User {
  public constructor(
    protected _id: string,
    protected _name: string,
    protected _clientId: string,
    protected _email: string,
    protected _password: string,
    protected _createdAt: Date,
    protected _deletedAt?: Date,
    protected _lastname?: string,
    protected _image?: string,
  ) {
    super(_id, _name, _email, _password, _createdAt, _deletedAt, _lastname, _image);
  }

  get clientId(): string {
    return this._clientId;
  }

  public fromFetch(fetch: Fetch): Saler {
    return new Saler(
      fetch.id,
      fetch.name,
      fetch.client_id,
      fetch.email,
      fetch.password,
      new Date(fetch.created_at),
      new Date(fetch.deleted_at),
      fetch.last_name,
      fetch.image
    );
  }

  public json(): Json {
    return {
      id: this.id,
      clientId: this.clientId,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt.toISOString(),
      deletedAt: this.createdAt.toISOString(),
      image: this.image,
    }
  }
}

export default Saler;
