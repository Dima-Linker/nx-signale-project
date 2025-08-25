import { CommentDto } from './comment.dto';

export interface ArticleDto {
  id: number;
  created_at: string;
  authorId: number;
  email: string;
  author: string;
  title: string;
  content: string;
  comments: CommentDto[];
}
