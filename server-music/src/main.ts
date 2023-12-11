import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as process from 'process';

const start = async () => {
  try {
    const PORT = process.env.PORT || 100;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Music example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.enableCors();
    await app.listen(PORT, () => console.log('server start on ', PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
