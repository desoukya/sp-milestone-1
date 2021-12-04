import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { UserService } from '../user/user.service';
import { User } from '@sp/schemas';

@Injectable()
export class AuthService {
  //constructor(private jwtService: JwtService) {}

  constructor(private readonly UserService: UserService,private readonly jwtService: JwtService) {}

  async validateUser(dto: AuthDto, email: string, pass: string): Promise<any> {
    const user = await this.UserService.findOne(dto, email, pass);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return 'valid user';
  }

  async login(dto: AuthDto) {
    /*const payload: User = {
      email: dto.email,
      password: dto.password,
    };
  */
    var payload: User = await this.UserService.findOne(dto, dto.email, dto.password);
    if (payload != null) {
      const myToken = { email: payload.email, sub: payload.password };
    
      const access_token = this.jwtService.sign(myToken, {
        secret: process.env.JWT_SECRET,
      });
      console.log(access_token);
    //return { access_token: this.jwtService.sign(payload),  };
}
}}