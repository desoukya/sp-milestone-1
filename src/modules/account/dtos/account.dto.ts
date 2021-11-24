import { IsNotEmpty } from 'class-validator';

export class AccountDto {

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  userid: string;

  @IsNotEmpty()
  accountid: string;


}
