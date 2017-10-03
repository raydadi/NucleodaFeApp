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
import { MinisterioAcaoSocialPage } from './ministerio-acao-social/ministerio-acao-social';
import { MinisterioCozinhaPage } from './ministerio-cozinha/ministerio-cozinha';
import { MinisterioNucleoKidsPage } from './ministerio-nucleo-kids/ministerio-nucleo-kids';
import { MinisterioEstruturaPage } from './ministerio-estrutura/ministerio-estrutura';
import { MinisterioEvangelismoPage } from './ministerio-evangelismo/ministerio-evangelismo';
import { MinisterioFamiliaPage } from './ministerio-familia/ministerio-familia';
import { MinisterioLibertacaoPage } from './ministerio-libertacao/ministerio-libertacao';
import { MinisterioNucleoEnsinoPage } from './ministerio-nucleo-ensino/ministerio-nucleo-ensino';
import { MinisterioNucleoJovemPage } from './ministerio-nucleo-jovem/ministerio-nucleo-jovem';
import { MinisterioPequenosNucleosPage } from './ministerio-pequenos-nucleos/ministerio-pequenos-nucleos';
import { MinisterioSentinelasPage } from './ministerio-sentinelas/ministerio-sentinelas';
import { MinisterioOver30Page } from './ministerio-over30/ministerio-over30';
import { MinisterioPalavraPage } from './ministerio-palavra/ministerio-palavra';
import { MinisterioRecepcaoPage } from './ministerio-recepcao/ministerio-recepcao';

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

  openAcaoSocial(){
    this.navCtrl.push(MinisterioAcaoSocialPage);
  }

  openCozinha(){
    this.navCtrl.push(MinisterioCozinhaPage);
  }

  openNucleoKids(){
    this.navCtrl.push(MinisterioNucleoKidsPage);
  }

  openEstrutura(){
    this.navCtrl.push(MinisterioEstruturaPage);
  }

  openEvangelismo(){
    this.navCtrl.push(MinisterioEvangelismoPage);
  }

  openFamilia(){
    this.navCtrl.push(MinisterioFamiliaPage);
  }

  openLibertacao(){
    this.navCtrl.push(MinisterioLibertacaoPage);
  }

  openNucleoEnsino(){
    this.navCtrl.push(MinisterioNucleoEnsinoPage);
  }

  openNucleoJovem(){
    this.navCtrl.push(MinisterioNucleoJovemPage);
  }

  openPequenosNucleos(){
    this.navCtrl.push(MinisterioPequenosNucleosPage);
  }

  openSentinelas(){
    this.navCtrl.push(MinisterioSentinelasPage);
  }

  openOver30(){
    this.navCtrl.push(MinisterioOver30Page);
  }

  openPalavra(){
    this.navCtrl.push(MinisterioPalavraPage);
  }

  openRecepcao(){
    this.navCtrl.push(MinisterioRecepcaoPage);
  }
}
