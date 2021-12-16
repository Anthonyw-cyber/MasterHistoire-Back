import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {museeEntity} from "./musee.entity";

@Injectable()
export class MuseeService {

    constructor(@InjectRepository(museeEntity) private readonly museeRepo : Repository<museeEntity>,) {}

    async findAll(){
        return await this.museeRepo.find()
    }

    async findOneById(museeId: number) {
        return await this.museeRepo.findOne(museeId)
    }

    async sendMusee(musee: museeEntity){
        return await this.museeRepo.save(musee)
    }
}
