import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { UserService } from '../user/user.service';
import { User } from '@sp/schemas';
import { UsersModule } from '../user/user.module';
import { Model } from 'mongoose';

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

  async login(dto: AuthDto,res) {
    //   const payload: User = {
    //     email: dto.email,
    //     password: dto.password,
    //     name: dto.email
    //   };
    //   return { access_token: this.jwtService.sign(payload),  };
    // }
    if (dto.email != null && dto.password != null) {
      var payload: User = await this.UserService.findOne(dto, dto.email, dto.password);
      //console.log(payload);
      if (payload != null) {
        const myToken = { email: payload.email, sub: payload.password };
        //console.log(myToken);
        //const payload = { username: user.username, sub: user.userId };
        const access_token = this.jwtService.sign(myToken, {
          secret: process.env.JWT_SECRET,
          expiresIn: "1h",
        });
        console.log(access_token);
  
      }
    }
}
}