import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction,TransactionSchema } from 'src/schemas/transaction.schema';
import {AccountsModule} from '../account/account.module';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports:[MongooseModule.forFeature([{ name:Transaction.name, schema: TransactionSchema }]),forwardRef(() => AccountsModule)],
  exports: [TransactionService],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}