import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { HomePage } from '../pages/home/home';
import { LaporanPage } from '../pages/laporan/laporan';
import { Page2 } from '../pages/page2/page2';
import { DetailPage } from '../pages/detail/detail';
import { Storage } from '@ionic/storage';
import { TambahLaporanPage } from '../pages/tambah-laporan/tambah-laporan';

@NgModule({
  declarations: [
    MyApp,
    Login,
    HomePage,
    LaporanPage,
    TambahLaporanPage,
    LogoutPage,
    DetailPage,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    HomePage,
    LaporanPage,
    TambahLaporanPage,
    LogoutPage,
    DetailPage,
    Page2
  ],
  providers: [Storage,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
