import { IsEmail, IsNotEmpty, IsNumber, isPhoneNumber } from 'class-validator';

export class UserDto {

  @IsNotEmpty()
  firstName:string;

  @IsNotEmpty()
  lastName:string;

  @IsNumber()
  userId:Number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNumber()
  phone: number;
  //@IsNotEmpty()
  //name: string;

 

  // @IsNotEmpty()
  // userName: string;



  //@IsNotEmpty()
  //phone: Number;

  //@IsEmail()
  //giuEmail: string;

  //@IsNotEmpty()
  //giuId: Number;

}