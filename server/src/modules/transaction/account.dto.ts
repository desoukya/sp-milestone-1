import {  IsNotEmpty } from 'class-validator';

export class accountDto {
  
  @IsNotEmpty()
  totalAmount : number;
  
  id:number;
  activeBankAccount : boolean;

}
