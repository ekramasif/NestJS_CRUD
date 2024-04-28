import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../users/entities/user.entity'; // Import User entity

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1d' }, 
    }),
    TypeOrmModule.forFeature([User]), // Provide User entity here
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
