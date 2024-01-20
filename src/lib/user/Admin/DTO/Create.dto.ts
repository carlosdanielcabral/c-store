import { randomUUID } from "crypto";
import CreateUserDTO from "../../DTO/CreateUser.dto";

class CreateAdminDTO extends CreateUserDTO {
  public constructor(
    public id: string = randomUUID(),
    public name: string,
    public email: string,
    public password: string,
    public lastname: string = '',
    public image: string = '',
  ) {
    super(id, name, email, password, lastname, image);
  }
}

export default CreateAdminDTO;
