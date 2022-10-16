/* eslint-disable prettier/prettier */
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class TimeStampEntity {
  @CreateDateColumn({
    type: Date,
    name: 'created_at',
  })
  createdAt: Date;
  @UpdateDateColumn({
    type: Date,
    name: 'updated_at',
    update: false,
  })
  updatedAt: Date;
  @DeleteDateColumn({
    type: Date,
    name: 'deleted_at',
  })
  deletedAt: Date;
}
