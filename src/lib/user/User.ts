abstract class User {
  public constructor(
    private _id: string,
    private _name: string,
    private _email: string,
    private _password: string,
    private _createdAt: Date,
    private _deletedAt?: Date,
    private _lastname?: string,
    private _image?: string,
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
}

export default User;

