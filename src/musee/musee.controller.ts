import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {MuseeService} from "./musee.service";

@ApiTags('Musee')
@Controller('musee')
export class MuseeController {
    constructor(private readonly museeService: MuseeService) {}

    @Get()
    async getallMusee(){
        return await this.museeService.findAll();
    }
}
