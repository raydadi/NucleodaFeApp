import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MinisterioAcolhimentoPage } from './ministerio-acolhimento/ministerio-acolhimento';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinisteriosPage');
  }

  openAcolhimento() {
      this.navCtrl.push(MinisterioAcolhimentoPage);
  }
}
