import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LayoutStore } from '../../../../../../state/src/lib/layout.store';


@Component({
  selector: 'lib-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatToolbar,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  private store = inject(LayoutStore);
  isSidebarOpen = this.store.isSidebarOpen;

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
