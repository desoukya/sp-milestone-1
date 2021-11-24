import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  // @IsNotEmpty()
  // userName: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone: Number;

  @IsEmail()
  giuEmail: string;

  @IsNotEmpty()
  giuId: Number;

}