import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {handicapEntity} from "../handicap/handicap.entity";

@Entity()
export class museeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @ManyToMany(() => handicapEntity)
  @JoinTable()
  handicap: handicapEntity[];
}
