import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class UserDto {

  
  //@IsNotEmpty()
  //name: string;

  @IsNumber()
  userId:Number;

  @IsEmail()
  email: string;

  // @IsNotEmpty()
  // userName: string;

  @IsNotEmpty()
  password: string;

  //@IsNotEmpty()
  //phone: Number;

  //@IsEmail()
  //giuEmail: string;

  //@IsNotEmpty()
  //giuId: Number;

}