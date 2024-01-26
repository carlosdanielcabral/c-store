import UserRepository from '../../Repository/User.repository';
import Customer from '../Customer';
import CustomerDAO from '../DAO/Customer.dao';
import CreateCustomerDTO from '../DTO/Create.dto';
import UpdateCustomerDTO from '../DTO/Update.dto';

class CustomerRepository extends UserRepository {
  public constructor(protected _dao: CustomerDAO = new CustomerDAO()) {
    super(_dao);
  }

  public getByEmail = async (email: string): Promise<Customer> => {
    const fetch = await this._dao.getByEmail(email);

    return Customer.fromFetch(fetch);
  };

  public create = async (dto: CreateCustomerDTO): Promise<Customer> => {
    await this._dao.create(dto);

    const created = await this._dao.getByEmail(dto.email);

    return Customer.fromFetch(created);
  };

  public getById = async (id: string): Promise<Customer> => {
    const fetch = await this._dao.getById(id);

    return Customer.fromFetch(fetch);
  };

  public update = async (dto: UpdateCustomerDTO): Promise<Customer> => {
    await this._dao.update(dto);

    const updated = await this._dao.getByEmail(dto.email);

    return Customer.fromFetch(updated);
  };
}

export default CustomerRepository;
