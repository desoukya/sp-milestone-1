import { } from 'class-validator'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsNumber, isPhoneNumber } from 'class-validator';


@Schema()
export class User {

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    username:string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    phone: string;

    @IsNumber()
    userId:number;
}
export interface RegisterDTO{
    username: string;
    password: string;
  }
  