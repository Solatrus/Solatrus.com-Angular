import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TrackLengthPipe } from './pipes/track-length.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchbarComponent,TrackLengthPipe],
  exports: [SearchbarComponent,TrackLengthPipe]
})
export class SharedModule { }