import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';

import { ISearchableService } from '../../../../interfaces/i-searchable';
import { MusicService } from '../../../shared/music.service';
import { MusicItem } from '../../../shared/models/music-item';
import { Observable, Subscription } from 'rxjs';

import { fadeInOut } from '../../../../animations';

@Component({
  selector: 'music-collection',
  templateUrl: './music-collection.component.html',
  styleUrls: ['./music-collection.component.css'],
  animations: [fadeInOut]
})
export class MusicCollectionComponent implements OnInit {
  collection: MusicItem[];
  observableCollection$: Observable<MusicItem[]>;

  constructor(@Inject('ISearchableService') private service: MusicService) { 
    this.collection = [];
    this.observableCollection$ = this.service.subscribeToFilter();
  }

  ngOnInit() {
    this.observableCollection$.subscribe(updatedCollection => {
        let itemsToRemove = this.collection.filter(x => updatedCollection.indexOf(x) === -1);
        let itemsToInsert = updatedCollection.filter(x => this.collection.indexOf(x) === -1);

        for (let item of itemsToRemove)
        {
          let index = this.collection.indexOf(item);
          this.collection.splice(index, 1);
        }
        for (let item of itemsToInsert)
        {
          let index = updatedCollection.indexOf(item);
          this.collection.splice(index, 0, item);
        }
    });
    
    this.service.search(null);
  }
}