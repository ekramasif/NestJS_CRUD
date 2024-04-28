import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User): Promise<string> {
    // Find the user by email in the database
    const foundUser = await this.authService.findByEmail(user.email);

    // If user not found, or password doesn't match, throw UnauthorizedException
    if (!foundUser || foundUser.password !== user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // If user is found and password matches, generate and return a JWT token
    return this.authService.login(foundUser);
  }
}
