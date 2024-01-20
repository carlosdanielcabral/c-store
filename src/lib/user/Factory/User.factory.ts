import AdminRepository from "../Admin/Repository/Admin.repository";
import UserRepository from "../Repository/User.repository";
import UserType from "../Enum/UserType";

class UserFactory {
  public getRepository = (type: UserType): UserRepository => {
    if (type === UserType.Admin)
      return new AdminRepository();
  }
}

export default UserFactory;
