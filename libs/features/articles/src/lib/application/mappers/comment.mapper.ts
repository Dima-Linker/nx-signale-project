import { Comment } from '../../domain/models/comment.model';
import { CommentDto } from '../dto/comment.dto';

export function mapCommentDtoToComment(commentDto: CommentDto): Comment {
  return {
    authorId: commentDto.authorId,
    author: commentDto.author,
    text: commentDto.text,
  };
}

export function mapCommentsDtoToComments(commentDtos: CommentDto[]): Comment[] {
  return commentDtos.map(mapCommentDtoToComment);
}
