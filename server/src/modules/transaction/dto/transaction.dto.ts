import { IsNotEmpty } from 'class-validator';

export class TransactionDto{
  
  credit: number;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  accountid: string;

}