import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MinisterioAcolhimentoPage } from './ministerio-acolhimento/ministerio-acolhimento';
import { MinisterioApoioPalcoPage } from './ministerio-apoio-palco/ministerio-apoio-palco';
import { MinisterioCoralPage } from './ministerio-coral/ministerio-coral';
import { MinisterioArtesanatoPage } from './ministerio-artesanato/ministerio-artesanato';
import { MinisterioComunicacaoPage } from './ministerio-comunicacao/ministerio-comunicacao';
import { MiniesterioDancaPage } from './miniesterio-danca/miniesterio-danca';
import { MinisterioIntercessaoPage } from './ministerio-intercessao/ministerio-intercessao';
import { MinisterioLouvorPage } from './ministerio-louvor/ministerio-louvor';
import { MinisterioMultimidiaPage } from './ministerio-multimidia/ministerio-multimidia';
import { MinisterioTeatroPage } from './ministerio-teatro/ministerio-teatro';

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

  openCoral(){
    this.navCtrl.push(MinisterioCoralPage);
  }

  openArtesanato(){
    this.navCtrl.push(MinisterioArtesanatoPage);
  }

  openComunicacao(){
    this.navCtrl.push(MinisterioComunicacaoPage);
  }

  openDanca(){
    this.navCtrl.push(MiniesterioDancaPage);
  }

  openIntercessao(){
    this.navCtrl.push(MinisterioIntercessaoPage);
  }

  openLouvor(){
    this.navCtrl.push(MinisterioLouvorPage);
  }

  openMultimidia(){
    this.navCtrl.push(MinisterioMultimidiaPage);
  }

  openTeatro(){
    this.navCtrl.push(MinisterioTeatroPage);
  }
}
