import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {museeEntity} from "./musee.entity";
import {handicapEntity} from "../handicap/handicap.entity";

@Injectable()
export class MuseeService {

    constructor(@InjectRepository(museeEntity) private readonly museeRepo : Repository<museeEntity>,) {}

    async findAll(){
        return await this.museeRepo
            .createQueryBuilder('musee')
            .leftJoinAndSelect("musee.handicap", "handicap").leftJoinAndSelect("handicap.dispositif", "dispositif")
            .getMany()
    }

    async findOneById(museeId: number) {
        return await this.museeRepo.findOne(museeId)
    }

    async sendMusee(musee: museeEntity, handicapes: handicapEntity[]){
        const newMusee = new museeEntity();
        newMusee.name = musee.name;
        newMusee.adresse = musee.adresse;
        newMusee.siteWeb = musee.siteWeb;
        newMusee.typologie = musee.typologie;
        newMusee.handicap = handicapes
        return await this.museeRepo.save(newMusee)
    }
}
