import { Router } from "express";
import AuthController from "../controllers/Auth.controller";
import AuthMiddleware from "../middlewares/Auth.middleware";

class AuthRoute {
  public constructor(
    private _controller: AuthController = new AuthController(),
    private _router: Router = Router(),
    private _middleware: AuthMiddleware = new AuthMiddleware(),
  ) {
    this.config();
  }

  get router(): Router  {
    return this._router
  }

  private config() {
    this._router.post('/', this._middleware.auth, this._controller.login);
  }
}

export default AuthRoute
