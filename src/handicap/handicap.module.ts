import { Module } from '@nestjs/common';
import { HandicapService } from './handicap.service';
import { HandicapController } from './handicap.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { handicapEntity } from './handicap.entity';

@Module({
  imports:[TypeOrmModule.forFeature([handicapEntity])],
  providers: [HandicapService],
  controllers: [HandicapController],
  exports: [HandicapService,TypeOrmModule]
})
export class HandicapModule {}
