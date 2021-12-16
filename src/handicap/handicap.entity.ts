import {
  Column,
  Entity, OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import {dispositifEntity} from "../dispositif/dispositif.entity";



@Entity()
export class handicapEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  handicap: string;

  @OneToMany(() => dispositifEntity, dispositif => dispositif.handicap)
  dispositif: dispositifEntity[];



}
