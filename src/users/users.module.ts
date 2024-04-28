import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios'; // Ensure HttpModule is imported
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule], // Include HttpModule
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}