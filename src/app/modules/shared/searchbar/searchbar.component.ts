import { Component, OnInit, Input, Inject } from '@angular/core';
import { ISearchableService } from '../../../interfaces/i-searchable';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  constructor(@Inject('ISearchableService') private searchService: ISearchableService) {  }

  ngOnInit() {
  }

  onSearchChange(searchText: string) {
    this.searchService.search(searchText);
  }

}