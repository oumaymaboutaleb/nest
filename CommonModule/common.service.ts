/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CommonService {
  static generate: any;
  generate() {
    const uuid = uuidv4();
    return uuid;
  }
}
