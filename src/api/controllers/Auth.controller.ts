import { Request, Response } from "express";
import HttpStatusCode from "../../lib/http/HttpStatusCode";
import AuthService from "../services/Auth.service";
import Token from "../../lib/auth/Token";

class AuthController {
  public constructor(
    private _service: AuthService = new AuthService(),
    private _token: Token = new Token(),
  ) {}

  public login = (request: Request, response: Response) => {
    const { dto } = request.body;

    const user = this._service.login(dto);
    const token = this._token.generate(user);

    return response.status(HttpStatusCode.Ok).json({ token });
  }
}

export default AuthController;
