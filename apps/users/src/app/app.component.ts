import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ArticleListComponent
} from '../../../../libs/features/articles/src/lib/presentation/pages/article-list-page/article-list.component';




@Component({
  imports: [
    RouterModule,
    ArticleListComponent,
  ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'users';
}
