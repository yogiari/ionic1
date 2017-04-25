import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tambah-laporan',
  templateUrl: 'tambah-laporan.html'
})
export class TambahLaporanPage {
  datas: any;

  constructor(public storage:Storage,public navCtrl: NavController,
  public navParams: NavParams, private http:Http, private loadingCtrl: LoadingController) {
        
        this.storage.get('nama').then((val) => {
          // loader    
          let loader = this.loadingCtrl.create({
            content: "Loading..."
          });
          loader.present();
  
          //http get
          let json = this.http.get('http://192.168.43.190/pa/android/select.php?user='+val).map(res => res.json())
          .subscribe(data => {
              this.datas = data.data;
              loader.dismiss();
            }, 
          err => {
              console.log("oopsss");
              loader.dismiss();
          });   
        });
  }

  laporan: any = {};
  date = new Date();
  tambah(laporan){
    //console.log(laporan);
    this.storage.get('nama').then((val) => {
      //loader 
      let loader = this.loadingCtrl.create({
        content: "Loading..."
      });
      loader.present();
      //data simpan keterangan dan nama label
      var link = 'http://192.168.43.190/pa/android/simpan_tiket.php';
      var data = JSON.stringify({id_odp:this.laporan.id_odp,keterangan:this.laporan.keterangan,tanggal_laporan:this.date,petugas_pelapor:val});        
      this.http.post(link, data).subscribe(
        data => { console.log(data,laporan,val); loader.dismiss(); }, 
        error => { console.log("Oooops!",data,laporan,val); loader.dismiss(); }
      );
    });
  }
     
}
