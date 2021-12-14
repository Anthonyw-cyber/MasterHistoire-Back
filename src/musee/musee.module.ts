import { Module } from '@nestjs/common';
import { MuseeController } from './musee.controller';
import { MuseeService } from './musee.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {museeEntity} from "./musee.entity";

@Module({
  imports: [TypeOrmModule.forFeature([museeEntity])],
  controllers: [MuseeController],
  providers: [MuseeService],
  exports: [MuseeService, TypeOrmModule],
})
export class MuseeModule {}
