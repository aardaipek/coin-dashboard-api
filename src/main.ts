import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './utils/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(appConfig.port, "0.0.0.0", () => {
    console.log("Listening port:" +appConfig.port);
    
  });
}
bootstrap();
