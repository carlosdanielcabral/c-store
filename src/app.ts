import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import ErrorMiddleware from './api/middlewares/ErrorMiddleware';
import swaggerDocument from '../swagger.json';
import Route from './api/routes/Route';

class App {
  private _app: Express;

  public constructor(private _router: Route = new Route()) {
    this._app = express();

    this._app.get('/', (req, res) => res.status(200).json({ online: true }));

    this.config();
  }

  get app() {
    return this._app;
  }

  private config = () => {
    this._app.use(express.json());
    this._app.use(cors());

    this._app.use('/', this._router.router);
    this._app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument),
    );
    this._app.use(ErrorMiddleware);
  };

  public listen = (port: number) =>
    this._app.listen(port, () =>
      console.log(`Aplicação online na porta ${port}`),
    );
}

export default App;
