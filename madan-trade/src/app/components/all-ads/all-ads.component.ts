import { Component, OnInit } from '@angular/core';

import { AdService } from '../ads/shared/ad.service';
import { Ad } from '../ads/shared/ad.model';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.css']
})
export class AllAdsComponent implements OnInit {

  adList: Ad[];

  constructor(public adService: AdService) { }

  ngOnInit() {
    var x = this.adService.getData();
    x.snapshotChanges().subscribe(item => {
      this.adList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.adList.push(y as Ad);
        
      })
    })
  }

}
