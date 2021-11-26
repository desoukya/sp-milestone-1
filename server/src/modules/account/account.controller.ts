import { Controller, Post, Body} from '@nestjs/common';
import { accountDto } from './account.dto'
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService) { }

  @Post('/newAccount') 
  async createAccount(@Body() account: accountDto) {
      return await this.accountService.newAccount(account);
  }
}