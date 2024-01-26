import AdminRepository from '../Admin/Repository/Admin.repository';
import UserRepository from '../Repository/User.repository';
import UserType from '../Enum/UserType';
import CustomerRepository from '../Customer/Repository/Customer.repository';
import SalerRepository from '../Saler/Repository/Saler.repository';

class UserFactory {
  public repository = (type: UserType): UserRepository => {
    if (type === UserType.Admin) return new AdminRepository();
    if (type === UserType.Saler) return new SalerRepository();

    return new CustomerRepository();
  };
}

export default UserFactory;
