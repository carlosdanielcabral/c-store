import User from "../User";

class Customer extends User {
  public constructor(
    protected _id: string,
    protected _name: string,
    protected _email: string,
    protected _password: string,
    protected _createdAt: Date,
    protected _deletedAt?: Date,
    protected _lastname?: string,
    protected _image?: string,
  ) {
    super(_id, _name, _email, _password, _createdAt, _deletedAt, _lastname, _image);
  }
}

export default Customer;
