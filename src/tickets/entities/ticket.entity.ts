import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Booking } from '../../bookings/entities/booking.entity';
@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seatNumber: string;

  @ManyToOne(() => Booking, booking => booking.tickets)
  booking: Booking;
}
