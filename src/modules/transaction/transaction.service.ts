import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  constructor(public id: number, public debit: number, public transactionName: string, 
    public date: Date, public credit: number, public activebankaccount: string, public totalAmount: number){}
    
    getLedgerDate(): string {

      let options: Intl.DateTimeFormatOptions = {
          day: "numeric", month: "numeric", year: "numeric",
          hour: "2-digit", minute: "2-digit"
      };

      return this.date.toLocaleDateString("en-GB", options) + " " + this.date.toLocaleTimeString("en-GB", options);
   }


  // TODO: Define your Transaction Service Logic
}
