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
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @Column({ nullable: true })
  adresse: string;

  @ApiProperty()
  @Column({ nullable: true })
  siteWeb: string;

  @ApiProperty()
  @Column({ nullable: true })
  typologie: string;

  @ApiProperty()
  @ManyToMany(() => handicapEntity, {cascade: ["insert"]})
  @JoinTable()
  handicap: handicapEntity[];
}
