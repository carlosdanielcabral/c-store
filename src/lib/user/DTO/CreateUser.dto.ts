import { randomUUID } from 'crypto';

class CreateUserDTO {
  public constructor(
    public id: string = randomUUID(),
    public name: string,
    public email: string,
    public password: string,
    public lastname: string = '',
    public image: string = '',
  ) {}
}

export default CreateUserDTO;
