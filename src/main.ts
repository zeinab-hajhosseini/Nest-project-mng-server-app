import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe);

  // Config for Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('server-app')
    .setDescription('Back-end side of project management system')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/doc', app, document);

  await app.listen(3000, () => {
    console.log('Server Run On Port 3000');
  });
}
bootstrap();
