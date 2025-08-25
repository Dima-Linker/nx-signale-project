import { Observable, of } from 'rxjs';
import { mapArticlesDtoToArticles } from '../../application/mappers/article.mapper';
import { mockArticles } from '../mocks/article.mock';
import { environment } from '../../../../../../../apps/users/src/environments/environment';
import { Article } from 'articles';


export class ArticleRepository {

  getArticles(): Observable<Article[]> {
    if (environment.useMocks) {
      return of(mapArticlesDtoToArticles(mockArticles))
    }
    throw new Error('Api wurde nicht gefunden');
  }
}

export const articleRepository = new ArticleRepository();
