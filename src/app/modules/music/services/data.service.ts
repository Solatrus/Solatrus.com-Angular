import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MusicItem } from '../models/music-item';
import { isNullOrWhitespace } from '../../../helpers';
import { ISearchableService, ISearchableItem } from '../../shared/interfaces/i-searchable';

@Injectable()
export class DataService implements ISearchableService {
  private searchText: string;

  private collection: MusicItem[];
  private filterSubject$: BehaviorSubject<MusicItem[]>;

  constructor() {
    let collection: MusicItem[] = [];
    collection.push(new MusicItem({
      "searchableText":"ABCXYZ",
      "key": "abcxyz",
      "markdownText": "# Hello 1",
      "details": [{
        "name": "Song 1",
        "timeSpanInSeconds": 65
      }
      ]
      }));
    collection.push(new MusicItem({
      "searchableText":"XYZ",
      "key": "xyz",
      "markdownText": "# Hello 2",
      }));
    collection.push(new MusicItem({
      "searchableText":"123",
      "key": "123",
      "markdownText": "# Hello 3",
      }));
    collection.push(new MusicItem({
      "searchableText":"123456",
      "key": "123456",
      "markdownText": "# Hello 4",
    }));

    this.collection = collection;
    this.filterSubject$ = new BehaviorSubject<MusicItem[]>([]);
    this.updateCollection();
  }

  private updateCollection() {
    let filteredCollection = this.collection.filter(this.contains, this);

    this.filterSubject$.next(filteredCollection);
  }

  search(searchText: string): void
  {
    this.searchText = searchText;
    this.updateCollection();
  }

  contains(searchableItem: ISearchableItem): boolean {
    if (isNullOrWhitespace(this.searchText))
      return true;

    if (searchableItem.searchableText.toUpperCase().indexOf(this.searchText.toUpperCase()) > -1)
      return true;

    return false
  }

  subscribeToFilter(): Observable<MusicItem[]> {
    return this.filterSubject$.asObservable();
  }

  getItem(key: string) {
    let item = this.collection.find(x => x.key === key);
    return item;
  }
}