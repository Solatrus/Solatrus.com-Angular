import { ISearchableItem } from '../../interfaces/i-can-search';

export class MusicItem implements ISearchableItem {
  constructor(obj?: any) {
    if (obj === undefined || obj === null)
      return;

    this.key = obj["key"];
    this.searchableText = obj["searchableText"];
    this.markdownText = obj["markdownText"];
  }
  get name(): string { return this.searchableText; }
  key: string;
  searchableText: string;
  markdownText: string;
}