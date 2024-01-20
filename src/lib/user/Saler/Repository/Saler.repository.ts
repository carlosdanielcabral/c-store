import UserRepository from "../../Repository/User.repository";
import SalerDAO from "../DAO/Saler.dao";
import Saler from "../Saler";

class SalerRepository extends UserRepository {
  public constructor(protected _dao: SalerDAO = new SalerDAO()) {
    super(_dao)
  }

  public getByEmail = async (email: string): Promise<Saler> => {
    const fetch = await this._dao.getByEmail(email);

    return Saler.fromFetch(fetch);
  }
}

export default SalerRepository;
