/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserInterface } from './entities/user.entity';


@Injectable()
export class UsersService {
  private readonly user: User[] = [];
  private readonly userInterface: UserInterface = {
    userId: 0,
    userName: '',
    userEmail: '',
    userHeight: '',
    userWeight: ''
  }

  create(createUserDto: CreateUserDto): any{
    const dateoFCreation = "Created on"+ " " + new Date().toString();
    const userObj = {...createUserDto, dateoFCreation}
    this.user.push(userObj);
    return userObj;
  }

  findAll(): User[]{
    return this.user;
  }

  private findUserProfile(id: number): [CreateUserDto, number]{
    const userIndex = this.user.findIndex((elem: any) => elem.userId === id);
    const userProfile = this.user[userIndex];
    if(!userProfile){
      throw new NotFoundException('could not find user');
    }
    const userValue: [] | any = [userProfile, userIndex];
    return userValue;
  }

  findOne(id: number) {
    const userProfileFound = this.findUserProfile(id)[0];
    return {...userProfileFound};
  }

  update(id:number, updateUserDto: UpdateUserDto){
    return `update param ${id} for ${updateUserDto}`;
  }

  remove(id: number) {
    const index = this.findUserProfile(id)[1];
    this.user.splice(index,1);
    return `user with id ${index} has been deleted`;
  }
}
