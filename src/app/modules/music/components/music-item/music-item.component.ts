import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MusicItem } from '../../models/music-item';
import { UIService } from '../../services/ui.service';

import { flexItemLeaveEnter } from '../../../../animations';

@Component({
  selector: 'music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css'],
  animations: [flexItemLeaveEnter]
})
export class MusicItemComponent implements OnInit {
  @Input() item: MusicItem;
  @ViewChild('container', {static:false}) container: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  getFlexItemState() {
    if (this.container === null || this.container === undefined) {
      return {
        value: 'stopped',
        params: { }
      };
    }

    const rect = this.container.nativeElement.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
}