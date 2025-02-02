import { Controller, Get } from "@nestjs/common";
import RouteConstants from "../../constants/router.constants";

@Controller()
export class RootController {
  @Get("/")
  getRootStatus(): string {
    return "Server is running.";
  }

  @Get(`${RouteConstants.healthCheck}`)
  getHealthStatus(): string {
    return "Server is healthy.";
  }
}
