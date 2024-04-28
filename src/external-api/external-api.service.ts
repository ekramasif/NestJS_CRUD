import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Comment } from './comment.interface';

@Injectable()
export class CommentsService {
  async fetchComments(): Promise<Comment[]> {
    try {
      const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch comments');
    }
  }
}