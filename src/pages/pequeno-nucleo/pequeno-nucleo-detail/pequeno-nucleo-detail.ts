import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone) {
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
}
