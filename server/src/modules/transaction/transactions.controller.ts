import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';
@Controller('transactions')
export class TransactionController extends TransactionService {
  @Get()
  getLedgerDate(){}
  // TODO: Define your Transaction Endpoints
}
