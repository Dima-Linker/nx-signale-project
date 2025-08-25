import { Comment } from './comment.model';

export interface Article {
  id: number,
  createdAt: Date,
  authorId: number,
  email: string,
  author: string,
  title: string,
  content: string,
  comments: Comment[];
}

