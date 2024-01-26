import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import HttpError from '../../lib/http/HttpError';
import HttpStatusCode from '../../lib/http/HttpStatusCode';

export type ErrorMessage = {
  message: string;
};
export interface ErrorHandler extends Error {
  status?: number;
  isJoi?: boolean;
  details?: ErrorMessage[];
}

const ErrorMiddleware = (
  err: ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof JsonWebTokenError)
    return res
      .status(HttpStatusCode.Unauthorized)
      .json({ message: err.message });

  if (err instanceof HttpError)
    return res.status(err.status).json({ message: err.message });

  if (err.isJoi)
    return res
      .status(HttpStatusCode.BadRequest)
      .json({ message: err.details[0].message });

  console.error(err);
  return res
    .status(HttpStatusCode.InternalServerError)
    .json({ message: 'Internal Server Error' });
};

export default ErrorMiddleware;
