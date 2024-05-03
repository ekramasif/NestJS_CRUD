import { Controller, Post, Body, Res, Req, Get, UnauthorizedException, BadRequestException, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.authService.create({ name, email, password: hashedPassword });
    delete user.password;
    return user;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.authService.findOne(email);
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }
    const jwt = await this.jwtService.signAsync({ email: user.email });
    response.cookie('jwt', jwt, { httpOnly: true });
    return { message: 'success' };
  }

  @Get('get-user')
  async getUser(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      if (!cookie) {
        throw new UnauthorizedException('JWT cookie not found');
      }
      const data = await this.jwtService.verifyAsync(cookie);
      if (!data || !data.email) {
        throw new UnauthorizedException('Invalid JWT token');
      }
      const user = await this.authService.findOne(data.email);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new UnauthorizedException('Unauthorized');
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return { message: 'success' };
  }
}