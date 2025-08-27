import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ArticleFacade } from '../../application/facades/article.facade';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, map, tap, of } from 'rxjs';
import { Article } from '../../domain/models/article.model';

export interface ArticleState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export const ArticleStore = signalStore(
  { providedIn: 'root' },
  withState<ArticleState>({
    articles: [],
    loading: false,
    error: null,
  }),
  withMethods((store, facade = inject(ArticleFacade)) => ({
    loadArticles: rxMethod<void>(() =>
      facade.getArticles().pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        map((articles) => patchState(store, { articles, loading: false })),
        catchError((error) => {
          console.error('Error:', error);
          patchState(store, { error: error.message, loading: false });
          return of(null);
        }),
      ),
    ),
  })),
);
