class UpdateUserDTO {
  public constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public lastname: string = '',
    public image: string = '',
  ) {}
}

export default UpdateUserDTO;
