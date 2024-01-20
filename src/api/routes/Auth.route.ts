import { Router } from "express";
import AuthController from "../controllers/Auth.controller";

class AuthRoute {
  public constructor(
    private _controller: AuthController = new AuthController(),
    private _router: Router = Router(),
  ) {
    this.config();
  }

  get router(): Router  {
    return this._router
  }

  private config() {
    this._router.post('/', this._controller.login);
  }
}

export default AuthRoute
