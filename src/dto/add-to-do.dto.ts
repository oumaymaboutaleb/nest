/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  ValidationArguments,
} from 'class-validator';
import { TodoStatusEnum } from 'src/enums/todo-status.enum';
export class AddTodoDto {
  @IsNotEmpty()
  @MinLength(3, {
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`;
    },
  })
  name: string;

  @IsNotEmpty()
  @MinLength(10, {
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`;
    },
  })
  createdAt: string;

  status: TodoStatusEnum;
}
