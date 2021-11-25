import { Module } from '@nestjs/common';
import { TransactionController } from './transactions.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema, UserSchema } from '@sp/schemas';
import { AccountSchema } from '../schemas/accounts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Account', schema: TransactionSchema}]),
    MongooseModule.forFeature([{name: 'Transaction', schema: AccountSchema}])
  ],

  exports: [TransactionService],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}