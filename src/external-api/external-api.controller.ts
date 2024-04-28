import { Controller, Get } from '@nestjs/common';
import { CommentsService } from './external-api.service';
import { Comment } from './comment.interface';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async getComments(): Promise<Comment[]> {
    return this.commentsService.fetchComments();
  }
}