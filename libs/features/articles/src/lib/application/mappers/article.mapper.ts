import { Article } from '../../domain/models/article.model';
import { ArticleDto } from '../dto/article.dto';
import { mapCommentDtoToComment } from './comment.mapper';

export function mapArticleDtoToArticle(articleDto: ArticleDto): Article {
  return {
    id: articleDto.id,
    createdAt: new Date(articleDto.created_at),
    authorId: articleDto.authorId,
    email: articleDto.email,
    author: articleDto.author,
    title: articleDto.title,
    content: articleDto.content,
    comments: articleDto.comments.map(mapCommentDtoToComment),
  };
}

export function mapArticlesDtoToArticles(articleDtos: ArticleDto[]): Article[] {
  return articleDtos.map(mapArticleDtoToArticle);
}
