import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AvisosPage } from '../../avisos/avisos';

/**
 * Generated class for the PopoverNotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover-notification',
  templateUrl: 'popover-notification.html',
})
export class PopoverNotificationPage {

  constructor(private navParams: NavParams, public navCtrl: NavController) {
  }

  click() {
    this.navCtrl.push(AvisosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverNotificationPage');
  }

}
