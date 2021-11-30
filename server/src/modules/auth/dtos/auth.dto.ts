import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

}
export interface RegisterDTO{
  username: string;
  password: string;
}
