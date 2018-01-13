import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-devocional-detail',
  templateUrl: 'devocional-detail.html',
})
export class DevocionalDetailPage {
    devocional: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController
  ) {
      this.devocional = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevocionalDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
