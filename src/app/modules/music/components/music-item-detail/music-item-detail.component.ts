import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MusicItem } from '../../models/music-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-item-detail',
  templateUrl: './music-item-detail.component.html',
  styleUrls: ['./music-item-detail.component.css'],
})
export class MusicItemDetailComponent implements OnInit {
  private item: MusicItem;
  constructor(@Inject('ISearchableService') private service: DataService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get("key");
    this.item = this.service.getItem(key);
  }

}