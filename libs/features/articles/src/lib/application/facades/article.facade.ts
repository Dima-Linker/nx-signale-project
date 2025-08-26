import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Article } from '../../domain/models/article.model';
import { articleRepository } from '../../infrastructure/repositories/article.repository';



@Injectable({providedIn: 'root'})

export class ArticleFacade {
  getArticles(): Observable<Article[]> {
      return articleRepository.getArticles().pipe(
        tap(articles => console.log(articles)),
        catchError(error => {
          console.log('Artikel kann nicht geladen werden', error);
          return []
        })
      )
  }
}
