import { randomUUID } from 'crypto';

class CreateClientDTO {
  public constructor(
    public readonly id: string = randomUUID(),
    public readonly name: string,
    public readonly cnpj: string,
  ) {}
}

export default CreateClientDTO;
