import { Component, OnInit } from '@angular/core';

import { AdService } from '../shared/ad.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  constructor(public adService: AdService, public toastr : ToastrService) { }

  ngOnInit() {
    // this.adService.getData();
    this.resetForm();
  }

  onSubmit(adForm: NgForm) {
    if(adForm.value.$key == null){
      this.adService.insertAd(adForm.value);
      this.toastr.success('Submitted Successfully', 'Ad created')
    }
    else{
      this.adService.updateAd(adForm.value);
      this.toastr.success("Updated Successfully", "Ad register");
    }
    this.resetForm(adForm);
  }

  resetForm(adForm?: NgForm) {
    if (adForm != null) {
      adForm.reset();
    }
    this.adService.selectedAd = {
      $key: null,
      title: '',
      description: '',
      price: 0,
      mobileNumber: '',
      username: sessionStorage.getItem("currentUser")

    }
  }

}
