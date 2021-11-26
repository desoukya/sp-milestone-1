import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from '../schemas/accounts.schema';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Account', schema: AccountSchema}])
  ],

  exports: [AccountService],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}