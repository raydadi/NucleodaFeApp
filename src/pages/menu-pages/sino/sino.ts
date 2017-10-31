import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AvisosPage } from "../../avisos/avisos";

@Component({
  selector: 'sino',
  templateUrl: 'sino.html',
})
export class SinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openNotification() {
      this.navCtrl.push(AvisosPage)
  }
}
