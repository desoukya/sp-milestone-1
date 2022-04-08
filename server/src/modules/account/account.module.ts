import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/schemas/account.schema';
import { AccountController } from './account.controller';
import { accountService } from './account.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])],
  exports: [accountService],
  controllers: [AccountController],
  providers: [accountService],
})
export class accountModule {}