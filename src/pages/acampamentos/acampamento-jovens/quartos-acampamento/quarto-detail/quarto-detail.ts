import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quarto-detail',
  templateUrl: 'quarto-detail.html',
})
export class QuartoDetailPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuartoDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
