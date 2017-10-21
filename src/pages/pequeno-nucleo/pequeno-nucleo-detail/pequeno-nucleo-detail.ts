import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pequeno-nucleo-detail',
  templateUrl: 'pequeno-nucleo-detail.html',
})
export class PequenoNucleoDetailPage {

    pequenoNucleo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pequenoNucleo = this.navParams.get('data');
  }
}
