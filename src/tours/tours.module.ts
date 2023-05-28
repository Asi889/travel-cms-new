import { Module } from '@nestjs/common';
import { ToursService } from './tours.service';
import { ToursController } from './tours.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ToursController],
  providers: [ToursService],
  imports: [PrismaModule],
})
export class ToursModule {}
