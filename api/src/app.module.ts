import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MqttModule],
})
export class AppModule {}
