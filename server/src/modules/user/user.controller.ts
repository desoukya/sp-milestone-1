import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from '@sp/schemas';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
 @UseGuards(AuthGuard('jwt'))
 @Get()
 user(@Request() req: any): any {
   return req.user;
 }

 /**
  * API endpoint handler returns all users from mongo database
  */
 @UseGuards(AuthGuard('jwt'))
 @Get('list')
 users(): Promise<User[]> {
   return this.userService.findAll();
 }
 
  @Get(':email')
  find(@Param("email") email: string): any {
    return this.userService.findByEmail(email);
    
  }

}
