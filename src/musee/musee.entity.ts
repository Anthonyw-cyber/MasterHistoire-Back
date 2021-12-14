import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class museeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;
}
