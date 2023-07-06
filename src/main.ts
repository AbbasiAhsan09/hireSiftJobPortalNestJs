import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Hire Sift Job Portal')
  .setDescription('Descriptoin backend')
  .setVersion('v1')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document);
  await app.listen(process.env.NODE_PORT);
}
bootstrap();
