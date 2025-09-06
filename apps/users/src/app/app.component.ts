import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../../../libs/shared/ui/src/lib/layout/main-layout.component';




@Component({
  imports: [RouterModule,
    MainLayoutComponent
  ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'users';
}
