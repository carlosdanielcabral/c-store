import { Fetch } from "./types";

class PaymentMethod {
  public constructor(private _id: number, private _name: string, private _thumbnail: string) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get thumbnail(): string {
    return this._thumbnail;
  }

  public static fromFetch(fetch: Fetch): PaymentMethod {
    return new PaymentMethod(
      fetch.id,
      fetch.name,
      fetch.thumbnail,
    )
  }
}

export default PaymentMethod;
