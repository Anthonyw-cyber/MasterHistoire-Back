import {CreateDispositifDto} from "../../dispositif/dto/create-dispositif.dto";

export class CreateHandicapDto{
    id: number;
    name: string;
    dispositifs: CreateDispositifDto[];
}