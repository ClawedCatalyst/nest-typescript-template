import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { ClsService } from "nestjs-cls";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class CorrelationMiddleware implements NestMiddleware {
  constructor(private readonly clsService: ClsService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const correlationId =
      (req.headers["x-correlation-id"] as string) || uuidv4();
    this.clsService.set("correlationId", correlationId);
    res.setHeader("x-correlation-id", correlationId);

    next();
  }
}
