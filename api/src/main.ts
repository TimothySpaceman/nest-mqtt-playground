import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://localhost:1883',
      username: 'user1',
      password: '1234'
    },
  });

  app.init();
}
bootstrap();
