import UserRepository from "../../Repository/User.repository";
import Admin from "../Admin";
import AdminDAO from "../DAO/Admin.dao";

class AdminRepository extends UserRepository {
  public constructor(protected _dao: AdminDAO = new AdminDAO()) {
    super(_dao)
  }

  public getByEmail = async (email: string): Promise<Admin> => {
    const fetch = await this._dao.getByEmail(email);

    return Admin.fromFetch(fetch);
  }
}

export default AdminRepository;
