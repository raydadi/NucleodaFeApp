import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { TestemunhosPage } from '../testemunhos/testemunhos';
import { PedidoOracaoPage } from '../pedido-oracao/pedido-oracao';
import { MinisteriosPage } from '../ministerios/ministerios';
import { PopoverNotificationPage } from '../menu-pages/popover-notification/popover-notification';
import { LoginPage } from '../menu-pages/login/login';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
// @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
// @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  navToTestemunhos() {
      this.navCtrl.push(TestemunhosPage);
  }

  navToPedido() {
      this.navCtrl.push(PedidoOracaoPage);
  }

  navToMinisterio() {
      this.navCtrl.push(MinisteriosPage);
  }

  navToLogin() {
      this.navCtrl.push(LoginPage);
  }

  popOver(ev) {
      let popover = this.popoverCtrl.create(PopoverNotificationPage, {
    //  contentEle: this.content.nativeElement,
    //  textEle: this.text.nativeElement
   });

   popover.present({
     ev: ev
   });
    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present();
  }
}
