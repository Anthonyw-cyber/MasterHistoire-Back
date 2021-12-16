import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {dispositifEntity} from "./dispositif.entity";
import {DispositifController} from "./dispositif.controller";
import {DispositifService} from "./dispositif.service";

@Module({
    imports:[TypeOrmModule.forFeature([dispositifEntity])],
    controllers:[DispositifController],
    providers:[DispositifService],
    exports:[DispositifService, TypeOrmModule],
})
export class DispositifModule {}
