import 'express-async-errors';
import AuthRoute from './Auth.route';
import { Router } from 'express';

class Route {
  public constructor(
    private _router: Router = Router(),
    private _auth: AuthRoute = new AuthRoute(),
  ) {
    this.config();
  }

  get router() {
    return this._router;
  }

  private config = () => {
    this._router.use('/auth', this._auth.router);
  };
}

export default Route;
