import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('consultDoctor/api');


  const config = new DocumentBuilder()
    .setTitle('Doctor Consult API')
    .setDescription('The Doctor Consult API description')
    .setVersion('1.0')
    .addTag('doctor-consult')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('consultDoctor/api', app, document);
  await app.listen(3000);
}
bootstrap();
