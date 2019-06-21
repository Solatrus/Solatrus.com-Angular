import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';

import { MusicService } from './services/music.service';

import { MusicCollectionComponent } from './components/music-collection/music-collection.component';
import { MusicItemComponent } from './components/music-item/music-item.component';
import { MusicItemDetailComponent } from './components/music-item-detail/music-item-detail.component';

const musicRoutes = [
    {
      path: 'music', component: MusicCollectionComponent,
      data : { routeKey: 'music-collection' }
    },
    { 
      path: 'music/:key', component: MusicItemDetailComponent, data: { routeKey: 'music-details' }
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(musicRoutes),
    MarkdownModule.forChild(),
    CommonModule,
    SharedModule,
  ],
  declarations: [
    MusicCollectionComponent,
    MusicItemComponent,
    MusicItemDetailComponent,
  ],
  exports: [
    RouterModule
  ],
  // Normally it's best to use @Injectable, but we need to inject an interface.
  providers: [ { provide: 'ISearchableService', useClass: MusicService } ]
})
export class MusicModule { }