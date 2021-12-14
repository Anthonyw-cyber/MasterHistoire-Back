import { Controller, Get } from '@nestjs/common';
import { handicapEntity } from './handicap.entity';
import { HandicapService } from './handicap.service';

@Controller('handicap')
export class HandicapController {
  constructor(private readonly handicapeService : HandicapService) {}

  @Get()
  async getallHandicap(){
    return await this.handicapeService.findall();
  }
}
