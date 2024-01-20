import UserRepository from "../../Repository/User.repository";
import Admin from "../Admin";
import AdminDAO from "../DAO/Admin.dao";
import CreateAdminDTO from "../DTO/Create.dto";
import UpdateAdminDTO from "../DTO/Update.dto";

class AdminRepository extends UserRepository {
  public constructor(protected _dao: AdminDAO = new AdminDAO()) {
    super(_dao)
  }

  public getByEmail = async (email: string): Promise<Admin> => {
    const fetch = await this._dao.getByEmail(email);

    return Admin.fromFetch(fetch);
  }

  public create = async (dto: CreateAdminDTO): Promise<Admin> => {
    await this._dao.create(dto);

    const created = await this._dao.getByEmail(dto.email);

    return Admin.fromFetch(created);
  }

  public getById = async (id: string): Promise<Admin> => {
    const fetch = await this._dao.getById(id);

    return Admin.fromFetch(fetch);
  }

  public update = async (dto: UpdateAdminDTO): Promise<Admin> => {
    await this._dao.update(dto);

    const updated = await this._dao.getByEmail(dto.email);

    return Admin.fromFetch(updated);
  }
}

export default AdminRepository;
