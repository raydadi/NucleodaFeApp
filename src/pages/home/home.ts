import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { TestemunhosPage } from '../testemunhos/testemunhos';
import { PedidoOracaoPage } from '../pedido-oracao/pedido-oracao';
import { MinisteriosPage } from '../ministerios/ministerios';
import { PopoverNotificationPage } from '../menu-pages/popover-notification/popover-notification';
import { LoginPage } from '../menu-pages/login/login';
import { AvisosPage } from '../avisos/avisos';
import { AwardsJovensPage } from '../awards/awards-jovens/awards-jovens';
import { AcampamentoJovensPage } from '../acampamentos/acampamento-jovens/acampamento-jovens';
import { CultoOnlinePage } from '../culto-online/culto-online';
import { PequenoNucleoPage } from '../pequeno-nucleo/pequeno-nucleo';
import { InscricoesPage } from '../inscricoes/inscricoes';

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

  navToAvisos() {
      this.navCtrl.push(AvisosPage);
  }

  navToAwards() {
      this.navCtrl.push(AwardsJovensPage);
  }

  navToAcampamento() {
      this.navCtrl.push(AcampamentoJovensPage);
  }

  navToCultoOnline() {
      this.navCtrl.push(CultoOnlinePage);
  }

  navToPequenoNucleo() {
      this.navCtrl.push(PequenoNucleoPage);
  }

  navToInscricoes() {
      this.navCtrl.push(InscricoesPage);
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
