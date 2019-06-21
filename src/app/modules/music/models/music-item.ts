import { ISearchableItem } from '../../shared/interfaces/i-can-search';
export class MusicItem implements ISearchableItem {
  key: string;
  searchableText: string;
  markdownText: string;
  details: MusicItemDetail[];

  get name(): string { return this.searchableText; }

  constructor(obj?: any) {
    if (obj === undefined || obj === null)
      return;

    this.key = obj["key"];
    this.searchableText = obj["searchableText"];
    this.markdownText = obj["markdownText"];

    this.details = [];

    if (obj["details"] === undefined || obj["details"] === null)
      return;

    for (let detail of obj["details"]) {
      //debugger;
      this.details.push(new MusicItemDetail(detail));
    }
  }
}

export class MusicItemDetail {
  timeSpanInSeconds: number;
  name: string;

  constructor(obj?: any) {
    if (obj === undefined || obj === null)
      return;
    this.name = obj["name"];
    this.timeSpanInSeconds = obj["timeSpanInSeconds"];
  }
}
