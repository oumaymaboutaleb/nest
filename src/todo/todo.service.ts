/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { QueryBuilder, Repository, SelectQueryBuilder } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTodoDto } from '../dto/update-todo.dto';

import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { AddTodoDto } from 'src/dto/add-to-do.dto';
import { SearchTodoDto } from 'src/dto/searchTodo.dto';
/*import { SearchTodoDto } from './dto/search-todo.dto';
import { CRUDService } from 'src/generics/crud.service';*/

@Injectable()
export class TodoService {
  softRestoreTodo: any;
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  addTodo(todo: AddTodoDto): Promise<TodoEntity> {
    return this.todoRepository.save(todo);
  }

  async updateTodo(
    updateTodoDto: UpdateTodoDto,
    id: number,
  ): Promise<TodoEntity> {
    const newTodo = await this.todoRepository.preload({ id, ...updateTodoDto });
    if (newTodo) {
      return this.todoRepository.save(newTodo);
    } else {
      throw new NotFoundException(`Le todo qui a l'ID  ${id} n'existe pas `);
    }
  }
  async softDeleteTodo(id: string): Promise<UpdateResult> {
    const result = await this.todoRepository.softDelete(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException(`Le todo d'id ${id} n'existe pas `);
  }
  getnumber() {
    return this.todoRepository
      .createQueryBuilder('todo')
      .select('status', 'status')
      .addSelect('COUNT(*)', 'count')
      .groupBy('status')
      .getRawMany();
  }
  async softRestoreTodoo(id: string) {
    const result = await this.todoRepository.restore(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException(`Le todo d'id ${id} n'existe pas `);
  }
  findAllByCriterias(
    searchTodoDto: SearchTodoDto = new SearchTodoDto(),
  ): Promise<TodoEntity[]> {
    let qb = this.todoRepository.createQueryBuilder('todo');

    qb = qb.select();

    if (searchTodoDto.description)
      qb = qb
        .where('(name LIKE :name OR description LIKE :description)')
        .setParameters({
          name: '%' + searchTodoDto.description + '%',
          description: '%' + searchTodoDto.description + '%',
        });

    if (searchTodoDto.status)
      qb = qb
        .andWhere('status = :status')
        .setParameters({ status: searchTodoDto.status });

    return qb.getRawMany();
  }
}
