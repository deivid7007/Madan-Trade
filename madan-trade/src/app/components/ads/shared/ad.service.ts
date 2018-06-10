import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Ad } from './ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  adsList: AngularFireList<any>;
  selectedAd: Ad = new Ad();
  constructor(public firebase: AngularFireDatabase) { }

  getData() {
    this.adsList = this.firebase.list('ads');
    return this.adsList;
  }

  insertAd(ad: Ad) {
    this.adsList.push({
      imgUrl: ad.imgUrl,
      title: ad.title,
      description: ad.description,
      price: ad.price,
      mobileNumber: ad.mobileNumber,
      username: ad.username
    }
    );
  }

  updateAd(ad: Ad) {
    this.adsList.update(ad.$key, {
      imgUrl: ad.imgUrl,
      title: ad.title,
      description: ad.description,
      price: ad.price,
      mobileNumber: ad.mobileNumber,
      username: sessionStorage.getItem("currentUser")
    }
    );
  }

  deleteAd($key: string) {
    this.adsList.remove($key);
  }
}
