import UserJson from "./UserJson";

abstract class User {
  public constructor(
    protected _id: string,
    protected _name: string,
    protected _email: string,
    protected _password: string,
    protected _createdAt: Date,
    protected _deletedAt?: Date,
    protected _lastname?: string,
    protected _image?: string,
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get lastname(): string | undefined {
    return this._lastname;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get image(): string | undefined {
    return this._image;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get deletedAt(): Date | undefined {
    return this._deletedAt;
  }

  public abstract json(): UserJson
}

export default User;

