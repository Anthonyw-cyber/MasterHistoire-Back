import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {handicapEntity} from "../handicap/handicap.entity";

@Entity()
export class dispositifEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @ManyToOne(() => handicapEntity, handicap => handicap.dispositif)
    handicap: handicapEntity;
}