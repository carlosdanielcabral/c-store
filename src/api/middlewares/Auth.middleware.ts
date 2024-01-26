import { NextFunction, Request, Response } from 'express';
import HttpError from '../../lib/http/HttpError';
import HttpStatusCode from '../../lib/http/HttpStatusCode';

class AuthMiddleware {
  public auth = (request: Request, response: Response, next: NextFunction) => {
    this.email(request.body.email);
    this.password(request.body.password);

    next();
  };

  public createDTO = (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    const { email, password } = request.body;

    request.body.dto = { email, password };

    next();
  };

  public email = (email: string) => {
    if (!email)
      throw new HttpError(HttpStatusCode.BadRequest, 'Email not provided');

    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (typeof email !== 'string' || !emailPattern.test(email))
      throw new HttpError(
        HttpStatusCode.BadRequest,
        'Invalid email or password',
      );
  };

  public password = (password: any) => {
    if (!password)
      throw new HttpError(HttpStatusCode.BadRequest, 'Password not provided');

    const invalidPassword =
      typeof password !== 'string' ||
      password.trim().length > 100 ||
      password.trim().length < 6;

    if (invalidPassword)
      throw new HttpError(
        HttpStatusCode.BadRequest,
        'Invalid email or password',
      );
  };
}

export default AuthMiddleware;
