import { catchError, Observable, of, throwError } from 'rxjs';
import { mapArticlesDtoToArticles } from '../../application/mappers/article.mapper';
import { mockArticles } from '../mocks/article.mock';
import { environment } from '../../../../../../../apps/users/src/environments/environment';
import { Article } from 'articles';


export class ArticleRepository {

  getArticles(): Observable<Article[]> {
    if (environment.useMocks) {
      return of(mapArticlesDtoToArticles(mockArticles)).pipe(
        catchError(error => throwError(() => new Error('Mock data error: ' + error)))
      );
    }
    return throwError(() => new Error('API integration noch nicht implementiert'));
  }
}

export const articleRepository = new ArticleRepository();
