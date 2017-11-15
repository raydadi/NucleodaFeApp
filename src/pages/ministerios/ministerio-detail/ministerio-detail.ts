import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ContatoModalPage } from '../contato-modal/contato-modal';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-ministerio-detail',
  templateUrl: 'ministerio-detail.html',
})
export class MinisterioDetailPage {

    ministerio: any;
    imgsource: any;
    showSpinner: boolean = true;
    showTitle: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public modalCtrl: ModalController) {
      this.ministerio = this.navParams.get('data');

      firebase.storage().ref().child(this.ministerio.fotoRef).getDownloadURL().then((url) => {
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
    let modal = this.modalCtrl.create(ContatoModalPage, {data: this.ministerio});
    modal.present();
  }

}
