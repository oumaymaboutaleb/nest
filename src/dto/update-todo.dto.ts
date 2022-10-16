/* eslint-disable prettier/prettier */

import {
  IsEnum,
  IsOptional,
  MaxLength,
  MinLength,
  ValidationArguments,
} from 'class-validator';
import { TodoStatusEnum } from 'src/enums/todo-status.enum';

export class UpdateTodoDto {
  @IsOptional()
  @MinLength(3, {
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`;
    },
  })
  name: string;
  @MaxLength(10, {
    message: (validationData: ValidationArguments) => {
      return `The size of your ${validationData.property} ${validationData.value} is long, the maximum size of ${validationData.property} is ${validationData.constraints[0]}`;
    },
  })
  description: string;

  @IsOptional()
  createdAt?: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
