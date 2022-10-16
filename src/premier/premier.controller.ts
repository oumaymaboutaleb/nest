/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  getmethod(): string {
    return 'this is a get method ';
  }
  @Post()
  postmethod(): string {
    return 'this is a post method ';
  }
  @Delete()
  deletemethod(): string {
    return 'this is a delete method ';
  }
  @Put()
  putmethod(): string {
    return 'this is a put method ';
  }
  @Patch()
  patchmethod(): string {
    return 'this is a patch method ';
  }
}
