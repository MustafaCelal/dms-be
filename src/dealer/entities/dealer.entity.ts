import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Dealer {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({name:"created_at"})
  createdAt: Date; // datetime(6),

  @Column({name:"created_by"})
  createdBy: string;

  @Column({name:"address"})
  address: string;

  @Column({name:"debt"})
  debt: number;

  @Column({name:"name"})
  name: string;

  @Column({name:"phone_number"})
  phoneNumber: string;
}
