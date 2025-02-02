import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ClsMiddleware, ClsModule } from "nestjs-cls";
import { ConfigModule } from "@nestjs/config";
import { RootModule } from "./src/module/root.module";
import { CorrelationMiddleware } from "./src/middleware/correlation.middleware";

@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
      },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    RootModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply ClsMiddleware first to initialize the CLS context
    consumer.apply(ClsMiddleware).forRoutes("*");

    // Apply CorrelationMiddleware after ClsMiddleware to ensure the CLS context is available
    consumer.apply(CorrelationMiddleware).forRoutes("*");
  }
}
