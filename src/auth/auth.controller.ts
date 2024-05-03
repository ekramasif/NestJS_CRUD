import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User): Promise<{ accessToken: string, refreshToken: string }> {
    const foundUser = await this.authService.findByEmail(user.email);

    if (!foundUser || foundUser.password !== user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(foundUser);
  }
}
