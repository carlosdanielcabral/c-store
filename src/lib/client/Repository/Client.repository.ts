import Client from '../Client';
import ClientDAO from '../DAO/Client.dao';
import CreateClientDTO from '../DTO/CreateClient.dto';

class ClientRepository {
  public constructor(protected _dao: ClientDAO = new ClientDAO()) {}

  public create = async (dto: CreateClientDTO): Promise<Client> => {
    await this._dao.create(dto);

    const fetch = await this._dao.getById(dto.id);

    return Client.fromFetch(fetch);
  };

  public getById = async (id: string): Promise<Client> => {
    const fetch = await this._dao.getById(id);

    return Client.fromFetch(fetch);
  };
}

export default ClientRepository;
