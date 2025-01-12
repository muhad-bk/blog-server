import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
// @ts-ignore
// eslint-disable-next-line
import { AppModule } from "./app.module";
import {
  swaggerPath,
  swaggerDocumentOptions,
  swaggerSetupOptions,
  // @ts-ignore
  // eslint-disable-next-line
} from "./swagger";

const { SERVER_PORT = 3000 } = process.env;

async function main() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  /** check if there is Public decorator for each path (action) and its method (findMany / findOne) on each controller */
  Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      if (
        Array.isArray(method.security) &&
        method.security.includes("isPublic")
      ) {
        method.security = [];
      }
    });
  });

  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);

  void app.listen(SERVER_PORT);

  return app;
}

module.exports = main();
