import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('libs/features/home/src/lib/home.module').then(m => m.HomeModule),
  },
  {
    path: 'articles',
    loadChildren: () => import('libs/features/articles/src/lib/articles.module').then(m => m.ArticlesModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
