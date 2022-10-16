/* eslint-disable prettier/prettier */
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../timestamp/timeStamp.entity';

@Entity('todo')
export class TodoEntity extends TimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 50,
  })
  name: string;
  @Column()
  description: string;
  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  status: TodoStatusEnum;
}
