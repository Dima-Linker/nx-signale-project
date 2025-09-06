import { Component, inject } from '@angular/core';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutStore } from '../../../../../state/src/lib/layout.store';

@Component({
  selector: 'lib-main-layout',
  standalone: true,
  imports: [
    NavigationComponent,
    MatSidenav,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  private store = inject(LayoutStore);
  isSidebarOpen = this.store.isSidebarOpen; // Korrigiert: Verwenden des store.isSidebarOpen

  toggleSidebar() {
    this.store.toggleSidebar();
  }
}
