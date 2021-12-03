import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import  users  from './users.json';

//const users = require ('./users.json');

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(dto: AuthDto) {
    //retrieve user
    const user = users.find(_user => user.email === dto.email);
    if(!user) throw new UnauthorizedException('user does not exist');
    if(user.pasword !== dto.password) 
      throw new UnauthorizedException('incorrect password');

    return this.signuser(user.id, user.email, 'user');
  }
  
  signuser(userid: number, email: string, type: string){
    return this.jwtService.sign({
      sub: userid,
      email,
      type: type
  });
  }
}
