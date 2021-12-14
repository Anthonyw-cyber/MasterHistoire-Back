import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {museeEntity} from "./musee.entity";

@Injectable()
export class MuseeService {

    constructor(@InjectRepository(museeEntity) private readonly MuseeRepo : Repository<museeEntity>,) {}

    async findAll(){
        return await this.MuseeRepo.find()
    }
}
