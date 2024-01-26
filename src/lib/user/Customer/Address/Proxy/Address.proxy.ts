import UserCustomerAddress from '../Address';
import UserCustomerAddressRepository from '../Repository/Address.repository';

class UserCustomerAddressProxy {
  public constructor(
    private _userId: string,
    private _repository: UserCustomerAddressRepository = new UserCustomerAddressRepository(),
  ) {}

  public realAddress = (): Promise<UserCustomerAddress[]> => {
    return this._repository.getAllByUser(this._userId);
  };
}

export default UserCustomerAddressProxy;
