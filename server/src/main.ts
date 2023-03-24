import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { Swagger } from './conf/swagger';
import { ValidationPipe } from './lib/ValidationPipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('/api');
  Swagger(app);
  app.enableCors({
    optionsSuccessStatus: 200,
    origin: JSON.parse(process.env.CORS_ORIGIN),
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(join(__dirname, '..', 'upload'), {
    prefix: '/upload/',
  });

  await app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`),
  );
}
bootstrap();
