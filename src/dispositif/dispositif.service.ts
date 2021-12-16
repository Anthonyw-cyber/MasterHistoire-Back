import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {dispositifEntity} from "./dispositif.entity";

@Injectable()
export class DispositifService {

    constructor(@InjectRepository(dispositifEntity) private readonly dispositifRepo : Repository<dispositifEntity>,) {}

    async findAll(){
        return await this.dispositifRepo.find()
    }
}
