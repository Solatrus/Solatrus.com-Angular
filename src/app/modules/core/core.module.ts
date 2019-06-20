import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [NavbarComponent, HomeComponent],
  exports: [NavbarComponent,HomeComponent]
})
export class CoreModule {}