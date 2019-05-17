import { Component, OnInit } from '@angular/core';

import { AdService } from '../shared/ad.service';
import { Ad } from '../shared/ad.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
  adList: Ad[];
  filteredList : Ad[];

  constructor(public adService: AdService, public toastr: ToastrService) { }

  ngOnInit() {
    var x = this.adService.getData();
    x.snapshotChanges().subscribe(item => {
      this.adList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        if (sessionStorage.getItem('currentUser') == '7deividmladenov007@gmail.com') {
          this.adList.push(y as Ad);
        }
        if (y["username"] == sessionStorage.getItem("currentUser")) {
          this.adList.push(y as Ad);
        }
        this.filteredList = [];
        this.filteredList = this.adList.reverse();
      })
    })
  }

  onEdit(ad: Ad) {
    this.adService.selectedAd = Object.assign({}, ad);
  }

  onDelete(key: string) {
    if (confirm("Are you sure you want to delete this ad?") == true)
      this.adService.deleteAd(key);
    this.toastr.warning("Deleted Successfully", "Ad register");
  }

}
