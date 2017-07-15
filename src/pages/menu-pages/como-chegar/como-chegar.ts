import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MapaArniqueirasPage } from './mapa-arniqueiras/mapa-arniqueiras';
import { MapaSedePage } from './mapa-sede/mapa-sede';

/**
 * Generated class for the ComoChegarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-como-chegar',
  templateUrl: 'como-chegar.html',
})
export class ComoChegarPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComoChegarPage');
  }

  navToSede() {
      this.navCtrl.push(MapaSedePage);
  }

  navToArniqueiras() {
      this.navCtrl.push(MapaArniqueirasPage);
  }
}
