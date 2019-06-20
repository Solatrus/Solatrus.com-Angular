import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MusicItem } from '../../../services/models/music-item';

@Component({
  selector: 'music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css'],
})
export class MusicItemComponent implements OnInit {
  @Input() item: MusicItem;
  constructor() { }

  ngOnInit() {
  }

}