import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  item: any;

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams, private http:Http, 
  private loadingCtrl: LoadingController) {
    this.item = navParams.get('post');
  }

  selesai(){
    console.log(this.item.id_tiket);
  }

}
