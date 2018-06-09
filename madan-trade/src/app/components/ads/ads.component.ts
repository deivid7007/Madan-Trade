import { Component, OnInit } from '@angular/core';

import { AdService } from './shared/ad.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
  providers : [AdService]
})
export class AdsComponent implements OnInit {

  constructor(public adService: AdService) { }

  ngOnInit() {
  }

}
