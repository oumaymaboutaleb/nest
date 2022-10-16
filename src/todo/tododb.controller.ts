/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { AddTodoDto } from 'src/dto/add-to-do.dto';
@Controller('todo')
export class TodoDBController {
  constructor(private todoService: TodoService) {}
  @Get('/numbers')
  getStats(): Promise<any> {
    return this.todoService.getnumber();
  }
  @Post()
  addTodo(@Body() newTodoData: AddTodoDto): Promise<TodoEntity> {
    return this.todoService.addTodo(newTodoData);
  }
  @Patch(':id')
  updateTodo(
    @Body() updateTodoDto: UpdateTodoDto,
    @Param('id') id: number,
  ): Promise<TodoEntity> {
    return this.todoService.updateTodo(updateTodoDto, id);
  }

  @Delete('/soft/:id')
  softDeleteTodo(@Param('id') id: string): Promise<UpdateResult> {
    return this.todoService.softDeleteTodo(id);
  }
}
