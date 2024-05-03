export class CreatePassengerDto {
  readonly name: string;
  readonly bookingId: number;
}

export class UpdatePassengerDto {
  readonly name?: string;
}
