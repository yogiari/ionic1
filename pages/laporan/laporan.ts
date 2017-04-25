import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { TambahLaporanPage } from '../tambah-laporan/tambah-laporan';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-laporan',
  templateUrl: 'laporan.html'
})
export class LaporanPage {
  posts: any;
  user: String;
  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams, private http:Http, 
  private loadingCtrl: LoadingController) {

   //session
      this.storage.get('nama').then((val) => {
          //this.user = val;
        // loader    
        let loader = this.loadingCtrl.create({
          content: "Loading..."
        });
        loader.present();
        //http get
        let json = this.http.get('http://192.168.43.190/pa/android/lihat-tiket-assurance.php?user=' + val).map(res => res.json())
        .subscribe(
          data => {
            this.posts = data;
            console.log(this.posts);
            loader.dismiss();
          }, 
          err => {
            console.log("oopsss");
            loader.dismiss();
          });
        });

  }

  itemTapped(event,post) {
    this.navCtrl.push(DetailPage,{post:post});
  }

  tambahLaporan(){
    this.navCtrl.push(TambahLaporanPage);
  }

}
