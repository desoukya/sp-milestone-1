import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { UserService } from '../user/user.service';
import { User } from '@sp/schemas';
import { domainToUnicode } from 'url';

@Injectable()
export class AuthService {
  //constructor(private jwtService: JwtService) {}

  constructor(private readonly UserService: UserService,private readonly jwtService: JwtService) {}

  async validateUser(dto: AuthDto, email: string, pass: string): Promise<any> {
    const user = await this.UserService.findOne(dto);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return 'valid user';
  }

  async login(dto: AuthDto) {
    const payload: User = 
      await this.UserService.findOne(dto);
    if( User == null) 
      throw new UnauthorizedException('can not find user');
    else {
      return { access_token: this.jwtService.sign(payload), };
    }
  }
}