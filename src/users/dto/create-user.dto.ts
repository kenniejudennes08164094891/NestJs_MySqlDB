/* eslint-disable prettier/prettier */
import { ArrayMinSize, IsArray, IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateUserDto {

    @IsNumber() @IsNotEmpty() @PrimaryGeneratedColumn()
    public userId: number;

    @IsString() @IsNotEmpty() @Column()
    public userName: string;

    @IsString() @IsEmail() @IsNotEmpty() @Column()
    public userEmail: string;

    @IsString() @IsNotEmpty() @Column()
    public userHeight: string;

    @IsString() @IsNotEmpty() @Column()
    public userWeight: string;


}
//npm i class-validator class-transformer