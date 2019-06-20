import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { MusicService } from '../../services/music.service';

import { SharedModule } from '../shared/shared.module';

import { MusicCollectionComponent } from './music-collection/music-collection.component';
import { MusicItemComponent } from './music-item/music-item.component';
import { MusicItemDetailComponent } from './music-item-detail/music-item-detail.component';

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
    SharedModule
  ],
  declarations: [
    MusicCollectionComponent,
    MusicItemComponent,
    MusicItemDetailComponent,
  ],
  exports: [
    RouterModule
  ],
  providers: [ { provide: 'ISearchableService', useClass: MusicService } ]
})
export class MusicModule { }