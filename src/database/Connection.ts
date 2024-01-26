import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

class Connection {
  private _host: string;

  private _user: string;

  private _password: string;

  private _database: string;

  private _connection: Promise<mysql.Connection>;

  public constructor() {
    this._host = process.env.MYSQL_HOST || 'localhost';
    this._user = process.env.MYSQL_USER || 'root';
    this._password = process.env.MYSQL_PASSWORD || 'root';
    this._database = process.env.MYSQL_DB_NAME || 'schedule_app';

    this._connection = this.connect();
  }

  private connect = async () => {
    return mysql.createConnection({
      host: this._host,
      user: this._user,
      password: this._password,
      database: this._database,
    });
  };

  public execute = async (query: string, values: (string | number)[]) =>
    (await this._connection).execute(query, values);
}

export default Connection;
