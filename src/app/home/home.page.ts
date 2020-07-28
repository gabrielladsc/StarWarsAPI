import { DetailsPage } from './../details/details.page';
import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datauser: any;
  constructor(
    public api: ApiService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
	  this.getDataUser();
  }
  
  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.datauser = res.results;
		console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }

  public showDetail(data: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          movie: JSON.stringify(data),
      }
    };
    this.navCtrl.navigateForward(["details"], navigationExtras);
  }

}