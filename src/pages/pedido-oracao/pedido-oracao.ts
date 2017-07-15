import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PedidoOracaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pedido-oracao',
  templateUrl: 'pedido-oracao.html',
})
export class PedidoOracaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoOracaoPage');
  }

  enviar() {
    let alert = this.alertCtrl.create({
      title: 'ENVIADO COM SUCESSO!',
      subTitle: 'O seu pedido foi enviado com sucesso! Estaremos orando por você!',
      cssClass: 'font-align: center',
      buttons: [
          {
            text: 'OK',
            cssClass: 'button-center',
            handler: () => {
              console.log('Disagree');
            }
          }
      ]
    });
    alert.present();
  }

}
