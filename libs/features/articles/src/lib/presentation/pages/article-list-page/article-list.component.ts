import { Component, OnInit, inject, computed } from '@angular/core';
import { ArticleStore } from 'articles';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';





@Component({
  selector: 'lib-article-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIcon,
  ],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  private store = inject(ArticleStore);
  articles = computed(() => this.store.articles());
  loading = computed(() => this.store.loading());
  error = computed(() => this.store.error());

  formatDate(date: string | Date): string {
    if (!date) return 'Ungültiges Datum';
    const dateObj = new Date(date);
    return isNaN(dateObj.getTime())
      ? 'Ungültiges Datum'
      : dateObj.toLocaleString();
  }

  ngOnInit() {
    this.store.loadArticles();
  }
}
