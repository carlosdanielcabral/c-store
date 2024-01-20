import UserRepository from "../../Repository/User.repository";
import Customer from "../Customer";
import CustomerDAO from "../DAO/Customer.dao";

class CustomerRepository extends UserRepository {
  public constructor(protected _dao: CustomerDAO = new CustomerDAO()) {
    super(_dao)
  }

  public getByEmail = async (email: string): Promise<Customer> => {
    const fetch = await this._dao.getByEmail(email);

    return Customer.fromFetch(fetch);
  }
}

export default CustomerRepository;
