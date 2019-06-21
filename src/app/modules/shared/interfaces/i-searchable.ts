import { Injectable } from '@angular/core';

export interface ISearchableService {
  search(searchText: string): void;
  contains(searchableItem: ISearchableItem): boolean;
}

export interface ISearchableItem {
  searchableText: string;
}