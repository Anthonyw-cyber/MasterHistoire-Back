import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {MuseeService} from "./musee.service";
import {museeEntity} from "./musee.entity";
import {handicapEntity} from "../handicap/handicap.entity";

@ApiTags('Musee')
@Controller('musee')
export class MuseeController {
    constructor(private readonly museeService: MuseeService) {}

    @Get()
    async getAllMusee(){
        return await this.museeService.findAll();
    }

    @Get('id')
    async getOneMuseeById(id: number){
        return await this.museeService.findOneById(id)
    }
    @ApiBody({type : [museeEntity]})
    @Post('musee')
    async postMusee(@Body() musee: museeEntity, @Body() handicape: handicapEntity[]){
        return await this.museeService.sendMusee(musee, handicape)
    }
}
