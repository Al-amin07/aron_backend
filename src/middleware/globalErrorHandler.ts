/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { config } from '../config';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  let message = 'Something went wrong';
  let status = 500;

  return res.status(status).json({
    success: false,
    message: err?.message || message,
    statusCode: err?.statusCode || status,

    stack: (config.NODE_ENV as string) === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
