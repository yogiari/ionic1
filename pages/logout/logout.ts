import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Login } from '../login/login';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage:Storage) {}

  sessionEnd() {
    this.storage.remove('nama');
    this.navCtrl.setRoot(Login);
  }

}
