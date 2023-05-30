import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './prisma.service'
import { PlaceService } from './place/place.service';
import { PlaceController } from './place/place.controller';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [PlaceModule],
  controllers: [AppController, PlaceController],
  providers: [PrismaService, PlaceService],
})
export class AppModule {}
