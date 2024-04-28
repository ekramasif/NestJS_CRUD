import { Module } from '@nestjs/common';
import { CommentsController } from './external-api.controller';
import { CommentsService } from './external-api.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
