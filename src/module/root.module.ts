import { Module } from "@nestjs/common";
import { RootController } from "../controllers/v1/root.controller";
@Module({
  imports: [],
  controllers: [RootController],
  providers: [],
})
export class RootModule {}
