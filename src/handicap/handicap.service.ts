import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { handicapEntity } from './handicap.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HandicapService implements OnApplicationBootstrap{

  constructor(@InjectRepository(handicapEntity) private readonly handicapeRepo : Repository<handicapEntity>,) {}

 async onApplicationBootstrap() :Promise<void> {

    const handicap = await this.handicapeRepo.findOne(1);
    if ( !handicap){
      const handicape1 ={
        id: 1 ,
        handicap : 'visuel',
      };
      const handicape2={
        id: 2 ,
        handicap : 'Auditif',
      };
      const handicape3={
        id: 3 ,
        handicap : 'Moteur',
      };
      const handicape4={
        id: 4 ,
        handicap : 'Psychologue',
      };
      const defaultHandicap1 =  await this.handicapeRepo.create(handicape1);
      const defaultHandicap2 =  await this.handicapeRepo.create(handicape2);
      const defaultHandicap3 =  await this.handicapeRepo.create(handicape3);
      const defaultHandicap4 =  await this.handicapeRepo.create(handicape4);
      await this.handicapeRepo.save(defaultHandicap1);
      await this.handicapeRepo.save(defaultHandicap2);
      await this.handicapeRepo.save(defaultHandicap3);
      await this.handicapeRepo.save(defaultHandicap4);
      console.log('coucou')
    };
    }

  async findall(){
    return await this.handicapeRepo.find();
  }

}

