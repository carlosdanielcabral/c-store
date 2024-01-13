import User from "./User";

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
}

export default Saler;
