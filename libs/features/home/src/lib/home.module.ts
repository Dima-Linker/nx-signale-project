import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [HomeRoutingModule, HomeComponent],
  declarations: [], // Hier muss die HomeComponent deklariert sein
  exports: [HomeComponent],
})
export class HomeModule {}
