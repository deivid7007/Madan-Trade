import { Component, OnInit } from '@angular/core';

import { AdService } from '../shared/ad.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  constructor(public adService : AdService) { }

  ngOnInit() {
  }

}
