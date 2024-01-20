import UpdateUserDTO from "../../DTO/UpdateUser.dto";

class UpdateCustomerDTO extends UpdateUserDTO {
  public constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public lastname: string = '',
    public image: string = '',
  ) {
    super(id, name, email, password, lastname, image);
  }
}

export default UpdateCustomerDTO;
