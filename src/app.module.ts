import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'config';

@Module({
  imports: [
    MongooseModule.forRoot(config.get('mongoDbUrl'), {
      useNewUrlParser: true,
      keepAlive: true,
      useUnifiedTopology: true,
      w: 1,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
