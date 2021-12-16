import {CreateHandicapDto} from "../../handicap/dto/create-handicap.dto";

export class CreateMuseeDto{
    id: number;
    name: string;
    adresse: string;
    siteWeb: string;
    typologie: string;
    handicap: CreateHandicapDto[];
}