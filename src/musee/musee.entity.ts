import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {handicapEntity} from "../handicap/handicap.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class museeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column({ nullable: true })
  name: string;

  @ApiProperty()
  @ManyToMany(() => handicapEntity)
  @JoinTable()
  handicap: handicapEntity[];
}
