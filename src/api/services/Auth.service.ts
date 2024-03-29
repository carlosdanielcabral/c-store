import Hash from '../../lib/Hash';
import EmailPasswordDTO from '../../lib/auth/DTO/EmailPasswordDTO';
import HttpError from '../../lib/http/HttpError';
import HttpStatusCode from '../../lib/http/HttpStatusCode';
import UserFactory from '../../lib/user/Factory/User.factory';

class AuthService {
  public constructor(private _factory: UserFactory = new UserFactory()) {}

  public login = async (data: EmailPasswordDTO) => {
    const repository = this._factory.repository(data.type);

    const user = await repository.getByEmail(data.email);

    if (!user)
      throw new HttpError(
        HttpStatusCode.BadRequest,
        'Invalid email or password',
      );

    const validPassword = Hash.compare(data.password, user.password);
    if (!validPassword)
      throw new HttpError(
        HttpStatusCode.BadRequest,
        'Invalid email or password',
      );

    return user.json();
  };
}

export default AuthService;
