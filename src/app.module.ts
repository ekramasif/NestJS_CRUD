import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './external-api/external-api.module';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
import { TicketsModule } from './tickets/tickets.module';
import { PassengersModule } from './passengers/passengers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    CommentsModule,
    UsersModule,
    AuthModule,
    BookingsModule,
    TicketsModule,
    PassengersModule,
  ],
})
export class AppModule {}