import UpdateUserDTO from '../../DTO/UpdateUser.dto';

class UpdateAdminDTO extends UpdateUserDTO {
  public constructor(
    public id: string,
    public clientId: string,
    public name: string,
    public email: string,
    public password: string,
    public lastname: string = '',
    public image: string = '',
  ) {
    super(id, name, email, password, lastname, image);
  }
}

export default UpdateAdminDTO;
