import { Get, Injectable, Post } from '@nestjs/common';
import { NestApplicationContext } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { accountDto } from './account.dto';
import { Account } from './account.interface';


@Injectable()
export class TransactionService {
  constructor(@InjectModel('Account') private accountModel: Model<Account>) {}

    _isPositive(amount: number): boolean{
      
      const isPositive = amount > 0;
      if(!isPositive){
        console.error('Amount Must be Positive');
        return false;
      }
      return true;
    }

    _isAllowed(amount: number): boolean{
      if(!this._isPositive(amount))
        return false;
      //const isAllowed = this.accountModel - amount >= 0;
      if(!isAllowed){
        console.error('You have insufficient funds!');
        return false;
      }
      return true;  
    }
  
    getLedgerDate(): string {

      let options: Intl.DateTimeFormatOptions = {
          day: "numeric", month: "numeric", year: "numeric",
          hour: "2-digit", minute: "2-digit"
      };

      return this.date.toLocaleDateString("en-GB", options) + " " + this.date.toLocaleTimeString("en-GB", options);
   }
   
   getTheDeposite(amount : number): boolean {
     if(this._isPositive(amount)){
       this.totalAmount += amount;
       console.info(`Deposite: ${this.activebankaccount , this.id} new balance is ${this.totalAmount}`);
       return true;
     }
     return false;
   }
   withDraw(amount : number) : boolean{
     if(this._isAllowed(amount)){
       this.totalAmount -= amount;
       console.info(`Withdraw: ${this.activebankaccount , this.id} new balance is ${this.totalAmount}`)
       return true;
     }
     return false;
   }
   MakeTransaction(amount: number , account : accountDto) : boolean{ 
     this.withDraw(amount); 
     account.totalAmount += amount;
     return true; 
   }

   
  }
   /*function Account(name:string , balance : number) {

     this.name = name;
     this.balance = balance;
     
   }*/


  // TODO: Define your Transaction Service Logic

