import UserRepository from "../../Repository/User.repository";
import SalerDAO from "../DAO/Saler.dao";
import CreateSalerDTO from "../DTO/Create.dto";
import UpdateSalerDTO from "../DTO/Update.dto";
import Saler from "../Saler";

class SalerRepository extends UserRepository {
  public constructor(protected _dao: SalerDAO = new SalerDAO()) {
    super(_dao)
  }

  public getByEmail = async (email: string): Promise<Saler> => {
    const fetch = await this._dao.getByEmail(email);

    return Saler.fromFetch(fetch);
  }

  public create = async (dto: CreateSalerDTO): Promise<CreateSalerDTO> => {
    await this._dao.create(dto);

    const created = await this._dao.getByEmail(dto.email);

    return Saler.fromFetch(created);
  }

  public getById = async (id: string): Promise<Saler> => {
    const fetch = await this._dao.getById(id);

    return Saler.fromFetch(fetch);
  }

  public update = async (dto: UpdateSalerDTO): Promise<Saler> => {
    await this._dao.update(dto);

    const updated = await this._dao.getByEmail(dto.email);

    return Saler.fromFetch(updated);
  }
}

export default SalerRepository;
