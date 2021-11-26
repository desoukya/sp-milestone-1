import { IsNotEmpty } from 'class-validator';

export class TransactionDto{

  @IsNotEmpty()
  Display_date: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  debit: number;

  @IsNotEmpty()
  credit: number;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  accountid: string;

}