import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Passenger } from '../../passengers/entities/passenger.entity';
import { Ticket } from '../../tickets/entities/ticket.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingCode: string;

  @ManyToOne(() => User, user => user.bookings)
  user: User;

  @OneToMany(() => Passenger, passenger => passenger.booking)
  passengers: Passenger[];

  @OneToMany(() => Ticket, ticket => ticket.booking)
  tickets: Ticket[];
}
