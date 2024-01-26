import CreateAdminDTO from "../../lib/user/Admin/DTO/Create.dto";
import AdminRepository from "../../lib/user/Admin/Repository/Admin.repository";

class AdminService {
  public constructor(
    private _repository: AdminRepository = new AdminRepository(),
  ) {}

  public create = async (dto: CreateAdminDTO) => {
    const user = await this._repository.create(dto);

    return user.json();
  }
}

export default AdminService;
