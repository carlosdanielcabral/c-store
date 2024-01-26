import UserTypes from '../../user/Enum/UserType';

class EmailPasswordDTO {
  public constructor(
    public type: UserTypes,
    public email: string,
    public password: string,
  ) {}
}

export default EmailPasswordDTO;
