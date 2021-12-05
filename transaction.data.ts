import { IsNotEmpty } from 'class-validator';
export class Transactiondata{

    // @IsNotEmpty()
    Display_date: string;
  
    // @IsNotEmpty()
  
    
    debit: number;
  
   
    credit: number;
  
    @IsNotEmpty()
    amount: number;
  
    // @IsNotEmpty()
    accountid: string;
  
  }