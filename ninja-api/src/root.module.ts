import { Module } from '@nestjs/common';
import { BookController } from './app.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('RootModule loaded');
  }
}
