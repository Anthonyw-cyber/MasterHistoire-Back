import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';



@Entity()
export class handicapEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  handicap: string;





}
