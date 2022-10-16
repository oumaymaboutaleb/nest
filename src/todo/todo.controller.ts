/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { TodoModel } from '../model/todo.model';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from './todo.service';
import { Patch } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { SearchTodoDto } from 'src/dto/searchTodo.dto';
import { TodoEntity } from './todo.entity';
import { TodoStatusEnum } from 'src/enums/todo-status.enum';

@Controller({
  path: 'todo',
  version: '1',
})
export class TodoController {
  constructor(private todoService: TodoService) {
    this.todos = [new TodoModel('1', 'Sport', 'Faire du sport')];
  }
  todos: TodoModel[] = [];
  @Get()
  getTodos(@Req() request: Request): TodoModel[] {
    // console.log(request);
    return this.todos;
  }
  @Post('')
  addTodo(@Body() newTodoData: TodoModel): TodoModel {
    let todo = new TodoModel();
    // const { name, description} = newTodoData;
    todo.id = uuidv4();
    todo = { ...todo, ...newTodoData };
    this.todos.push(todo);
    return todo;
  }
  @Patch('/soft/:id')
  softRestoreTodo(@Param('id') id: string): Promise<any> {
    return this.todoService.softRestoreTodoo(id);
  }
  @Get('/:description?/:status?')
  getTodosbycriteria(
    @Query() searchTodoDto: SearchTodoDto,
    @Param('description') description: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Param('status') status: TodoStatusEnum,
  ): Promise<TodoEntity[]> {
    return this.todoService.findAllByCriterias(searchTodoDto);
  }
}
