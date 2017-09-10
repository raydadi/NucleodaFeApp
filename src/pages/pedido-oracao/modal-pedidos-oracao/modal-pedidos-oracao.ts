import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pedido } from '../pedido-oracao';

/**
 * Generated class for the ModalPedidosOracaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-pedidos-oracao',
  templateUrl: 'modal-pedidos-oracao.html',
})
export class ModalPedidosOracaoPage {

  pedido: Pedido;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPedidosOracaoPage');
  }

}
