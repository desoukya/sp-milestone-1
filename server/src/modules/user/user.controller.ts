import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  
  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */    
  @UseGuards(AuthGuard('jwt'))
  @Get()
  user(@Request() req: any): any {
    return req.user;
  }

  /**
   * API endpoint handler returns all users from mongo database
   */
  //@UseGuards(AuthGuard('jwt'))
  @Get('list')
  users(): any {
    return this.userService.findAll();
  }


  @Post() 
  async create(@Body() register: UserDto) {
      return await this.userService.newUser(register);
  }
}
