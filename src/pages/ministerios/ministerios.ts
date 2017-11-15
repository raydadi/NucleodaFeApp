import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { MinisterioAcolhimentoPage } from './ministerio-acolhimento/ministerio-acolhimento';
import { MinisterioApoioPalcoPage } from './ministerio-apoio-palco/ministerio-apoio-palco';
import { MinisterioCoralPage } from './ministerio-coral/ministerio-coral';
import { MinisterioArtesanatoPage } from './ministerio-artesanato/ministerio-artesanato';
import { MinisterioComunicacaoPage } from './ministerio-comunicacao/ministerio-comunicacao';
import { MinisterioDancaPage } from './ministerio-danca/ministerio-danca';
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

import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'page-ministerios',
  templateUrl: 'ministerios.html',
})
export class MinisteriosPage {
  ministerios: FirebaseListObservable<any>;
  imgsource: Array<any> = [];
  showSpinner: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public zone: NgZone
  ) {
    this.ministerios = db.list("/ministerios", {
      query: {
        orderByChild: 'ordem'
      }
    });
  }

  ionViewDidLoad() {
    this.ministerios.subscribe(data => {

      data.forEach((ministerio, index) => {

        firebase.storage().ref().child(ministerio.fotoRef).getDownloadURL().then((url) => {
          this.zone.run(() => {
            this.imgsource[ministerio.$key] = url;
          })
        })

        if (index == data.length - 1) {
          this.showSpinner = false;
        }
      });
    });
  }

  open(key) {

    switch (key) {
      case "0":
        this.navCtrl.push(MinisterioAcaoSocialPage);
        break;
      case "1":
        this.navCtrl.push(MinisterioAcolhimentoPage);
        break;
      case "2":
        this.navCtrl.push(MinisterioCoralPage);
        break;
      case "3":
        this.navCtrl.push(MinisterioCozinhaPage);
        break;
      case "4":
        this.navCtrl.push(MinisterioNucleoKidsPage);
        break;
      case "5":
        this.navCtrl.push(MinisterioDancaPage);
        break;
      case "6":
        this.navCtrl.push(MinisterioEstruturaPage);
        break;
      case "7":
        this.navCtrl.push(MinisterioEvangelismoPage);
        break;
      case "8":
        this.navCtrl.push(MinisterioFamiliaPage);
        break;
      case "9":
        this.navCtrl.push(MinisterioIntercessaoPage);
        break;
      case "10":
        this.navCtrl.push(MinisterioLibertacaoPage);
        break;
      case "11":
        this.navCtrl.push(MinisterioLouvorPage);
        break;
      case "12":
        this.navCtrl.push(MinisterioMultimidiaPage);
        break;
      case "13":
        this.navCtrl.push(MinisterioNucleoEnsinoPage);
        break;
      case "14":
        this.navCtrl.push(MinisterioNucleoJovemPage);
        break;
      case "15":
        this.navCtrl.push(MinisterioPequenosNucleosPage);
        break;
      case "16":
        this.navCtrl.push(MinisterioSentinelasPage);
        break;
      case "17":
        this.navCtrl.push(MinisterioTeatroPage);
        break;
      case "18":
        this.navCtrl.push(MinisterioApoioPalcoPage);
        break;
      case "19":
        this.navCtrl.push(MinisterioArtesanatoPage);
        break;
      case "20":
        this.navCtrl.push(MinisterioComunicacaoPage);
        break;
      case "21":
        this.navCtrl.push(MinisterioOver30Page);
        break;
      case "22":
        this.navCtrl.push(MinisterioPalavraPage);
        break;
      case "23":
        this.navCtrl.push(MinisterioRecepcaoPage);
        break;
    }
  }
}
