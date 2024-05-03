export class CreateTicketDto {
  readonly seatNumber: string;
  readonly bookingId: number;
}

export class UpdateTicketDto {
  readonly seatNumber?: string;
}
