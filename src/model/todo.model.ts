/* eslint-disable prettier/prettier */

import { TodoStatusEnum } from '../enums/todo-status.enum';
import { v4 as uuidv4 } from 'uuid';
export class TodoModel {
  constructor(
    public id = '',
    public name: string = '',
    public description: string = '',
    public createdAt = new Date(),
    public status: TodoStatusEnum = TodoStatusEnum.waiting,
  ) {}
}
