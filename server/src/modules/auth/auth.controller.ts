import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
<<<<<<< Updated upstream
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
=======
  async login(@Body() dto: AuthDto) {
    return await this.authService.login(dto);
>>>>>>> Stashed changes
  }
}
