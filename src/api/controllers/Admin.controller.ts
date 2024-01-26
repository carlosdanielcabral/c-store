import { Request, Response } from "express";
import HttpStatusCode from "../../lib/http/HttpStatusCode";
import AdminService from "../services/Admin.service";

class AdminController {
  public constructor(
    private _service: AdminService = new AdminService(),
  ) {}

  public create = async (request: Request, response: Response) => {
    const { dto } = request.body;

    await this._service.create(dto);

    return response.status(HttpStatusCode.Created).json();
  }
}

export default AdminController;
