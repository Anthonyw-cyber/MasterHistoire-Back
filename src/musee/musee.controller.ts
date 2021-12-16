import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {MuseeService} from "./musee.service";
import {museeEntity} from "./musee.entity";

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
}
