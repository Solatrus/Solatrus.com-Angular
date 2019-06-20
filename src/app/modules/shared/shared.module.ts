import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent]
})
export class SharedModule { }