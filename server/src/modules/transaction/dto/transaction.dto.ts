import { IsNotEmpty } from 'class-validator';

export class TransactionDto{

  @IsNotEmpty()
  name: string;
  
  credit: number;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  accountid: string;

}