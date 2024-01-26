import UserCustomerAddress from "../Address";
import UserCustomerAddressDAO from "../DAO/Address.dao";

class UserCustomerAddressRepository {
  public constructor(protected _dao: UserCustomerAddressDAO = new UserCustomerAddressDAO()) {}

  public getAllByUser = async (id: string): Promise<UserCustomerAddress[]> => {
    const fetch = await this._dao.getAllByUser(id);

    const addresses = fetch.map(user => UserCustomerAddress.fromFetch(user));

    return addresses;
  }
}

export default UserCustomerAddressRepository;
