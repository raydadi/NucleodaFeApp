import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosAcampamentoPage } from './avisos-acampamento/avisos-acampamento';
import { DevocionalAcampamentoPage } from './devocional-acampamento/devocional-acampamento';
import { QuemProcurarAcampamentoPage } from './quem-procurar-acampamento/quem-procurar-acampamento';
import { ProgramacaoAcampamentoPage } from './programacao-acampamento/programacao-acampamento';
import { QuartosAcampamentoPage } from './quartos-acampamento/quartos-acampamento';
import { EscalasAcampamentoPage } from './escalas-acampamento/escalas-acampamento';
import { CardapioAcampamentoPage } from './cardapio-acampamento/cardapio-acampamento';

@IonicPage()
@Component({
  selector: 'page-acampamento-jovens',
  templateUrl: 'acampamento-jovens.html',
})
export class AcampamentoJovensPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navToRecomendacoes() {
      this.navCtrl.push(AvisosAcampamentoPage);
  }

  navToDevocionais() {
      this.navCtrl.push(DevocionalAcampamentoPage);
  }

  navToQuemProcurar() {
      this.navCtrl.push(QuemProcurarAcampamentoPage);
  }

  navToProgramacao() {
      this.navCtrl.push(ProgramacaoAcampamentoPage);
  }

  navToQuartos() {
      this.navCtrl.push(QuartosAcampamentoPage);
  }

  navToEscalas() {
      this.navCtrl.push(EscalasAcampamentoPage);
  }

  navToCardapio() {
      this.navCtrl.push(CardapioAcampamentoPage);
  }

}
