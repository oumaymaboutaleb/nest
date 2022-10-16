/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CommonService } from 'CommonModule/common.service';
import { TodoController } from './todo.controller';
import { TodoEntity } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoDBController } from './tododb.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoDBController],
  // eslint-disable-next-line prettier/prettier
  providers: [
    TodoService,
    {
      provide: 'uuid',
      useValue: CommonService,
    },
  ],
})
export class TodoModule {}
