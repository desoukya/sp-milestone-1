import { Body, Controller, Get, Request, UseGuards,Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { accountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: accountService) {}

 @UseGuards(AuthGuard('jwt'))
  @Get('lists')
  users(): any {
    return this.accountService.findAll();}

  @Get()
  getAccouts(@Headers() req:any){
    return this.accountService.getAll(req);
    }
}