import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PnContatoPage } from "../pn-contato/pn-contato";
import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-pequeno-nucleo-detail',
  templateUrl: 'pequeno-nucleo-detail.html',
})
export class PequenoNucleoDetailPage {

  pequenoNucleo: any;
  imgsource: any;
  showSpinner: boolean = true;
  showTitle: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public modalCtrl: ModalController) {
      this.pequenoNucleo = this.navParams.get('data');

      firebase.storage().ref().child(this.pequenoNucleo.fotoRef).getDownloadURL().then((url) => {
          this.zone.run(() => {
              this.imgsource = url;
          })
      })
  }

  showSpinnerMeth() {
      this.showSpinner = false;
      this.showTitle = true;
  }

  openContato() {
    let modal = this.modalCtrl.create(PnContatoPage, {data: this.pequenoNucleo});
    modal.present();
  }
}
