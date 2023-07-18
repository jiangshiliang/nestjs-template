import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(666);
  console.log('Application run in http://127.0.0.1:666');
}
bootstrap();
