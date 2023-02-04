/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserDto } from './users/dto/create-user.dto';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'J.j@2015',
      database: 'test',
      entities: [CreateUserDto],
      synchronize: true,
    }), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private dataSource: DataSource
  ){}
}


//To automatically generate all needed CRUD files
//nest g resource resource-name

//npm i @nestjs/typeorm --save
//npm install --save typeorm mysql2