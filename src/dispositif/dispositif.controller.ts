import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {DispositifService} from "./dispositif.service";

@ApiTags('Dispositif')
@Controller('dispositif')
export class DispositifController {
    constructor(private readonly dispositifService: DispositifService) {}

    @Get()
    async getAllDispositif(){
        return await this.dispositifService.findAll()
    }
}
