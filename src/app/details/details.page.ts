import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  movie: any;
  
  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController
  ) { }

  pop(){
    this.navCtrl.pop();
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movie = JSON.parse(params["movie"]);
  });
  }

}
