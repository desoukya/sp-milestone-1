import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  // TODO: Define your account Endpoints
  constructor(private accountService: AccountService) {}

  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */    
  //@UseGuards(AuthGuard('jwt'))
  @Get()
  account(@Request() req: any): any {//might not need this method
    return req.account;
  }

  /**
   * API endpoint handler returns all users from mongo database
   */
  //@UseGuards(AuthGuard('jwt'))
  @Get('list')
  accounts(): any {
    return this.accountService.findAll();
  }

  @Get('account')
  GetAccount(userid: string): any {
    return this.accountService.findAccounts(userid);
  }
}