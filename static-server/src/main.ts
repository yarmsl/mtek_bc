import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Swagger } from './conf/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  Swagger(app);
  app.enableCors({
    optionsSuccessStatus: 200,
    origin: JSON.parse(process.env.CORS_ORIGIN),
  });

  await app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`),
  );
}
bootstrap();
