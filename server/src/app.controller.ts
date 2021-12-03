import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { getUserByEmail } from './utils/getUserByEmail';
import { JwtAuthGuard } from './utils/jwt-guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@getUserByEmail() email: string): string {
    return this.appService.getHello(email);
  }
}