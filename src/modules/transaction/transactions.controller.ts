import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  // TODO: Define your Transaction Endpoints
  constructor(private transactionService: TransactionService) {}

  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */    
  //@UseGuards(AuthGuard('jwt'))
  @Get()
  transaction(@Request() req: any): any {
    return req.transaction;
  }

  /**
   * API endpoint handler returns all users from mongo database
   */
  //@UseGuards(AuthGuard('jwt'))
  @Get('list')
  transactions(): any {
    return this.transactionService.findAll();
  }

  @Post()
  PostTransaction(Display_date: string, name: string, debit: number, credit: number, amount: number, accountid: string): any {
    return this.transactionService. PostTransaction(Display_date, name, debit, credit, amount, accountid);
  }
}
