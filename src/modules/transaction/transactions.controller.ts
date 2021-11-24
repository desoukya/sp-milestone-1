import { Body, Controller, Get, Post, Request, UseGuards,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  // TODO: Define your Transaction Endpoints
  constructor(private transactionService: TransactionService) {}

  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */    
  @UseGuards(AuthGuard('jwt'))
  @Get(':accountId')
  transaction(@Param() accountId: string): any {
    return this.transactionService.getTrancation(accountId);
  }

  /**
   * API endpoint handler returns all users from mongo database
   */
  //@UseGuards(AuthGuard('jwt'))
  
  //@UseGuards(AuthGuard('jwt'))
  // @Post()
  // PostTransaction(Display_date: string, name: string, debit: number, credit: number, amount: number, accountid: string): any {
  //   return this.transactionService.PostTransaction(Display_date, name, debit, credit, amount, accountid);
  // }

  @Post()
  addTransaction(
	  @Body('transactionDate') trDate:string,
	  @Body('transactionName') trName:string,
	  @Body('debit') debit:number,
	  @Body('credit')credit:number,
	  @Body('amount') amount:number,
    @Body('accounid') accountid:string,
	){
	  const newTransaction=this.transactionService.PostTransaction(trDate,trName,debit,credit,amount,accountid)
	}
}
