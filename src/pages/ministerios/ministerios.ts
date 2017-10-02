import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MinisterioAcolhimentoPage } from './ministerio-acolhimento/ministerio-acolhimento';
import { MinisterioApoioPalcoPage } from './ministerio-apoio-palco/ministerio-apoio-palco';

/**
 * Generated class for the MinisteriosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ministerios',
  templateUrl: 'ministerios.html',
})
export class MinisteriosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openAcolhimento() {
      this.navCtrl.push(MinisterioAcolhimentoPage);
  }

  openApoioPalco(){
    this.navCtrl.push(MinisterioApoioPalcoPage);
  }
}
