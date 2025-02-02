import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import helmet from "helmet";
import morgan = require("morgan");
import { RequestMethod } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware
  app.use(helmet());
  app.use(morgan("dev"));

  // Enable CORS
  app.enableCors({ origin: true });

  // Set a global prefix for all routes except root
  app.setGlobalPrefix("", {
    exclude: [{ path: "/", method: RequestMethod.GET }],
  });

  const PORT = parseInt(process.env.PORT || "") || 3000;
  await app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
bootstrap();
