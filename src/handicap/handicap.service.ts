import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { handicapEntity } from './handicap.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HandicapService {

  constructor(@InjectRepository(handicapEntity) private readonly handicapeRepo : Repository<handicapEntity>,) {}

  async findall(){
    return await this.handicapeRepo.find();
  }
}

