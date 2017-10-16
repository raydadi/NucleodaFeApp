import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ContatoModalPage } from '../contato-modal/contato-modal';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-ministerio-danca',
  templateUrl: 'ministerio-danca.html',
})
export class MinisterioDancaPage {
  ministerio: FirebaseObjectObservable<any>;
  imgsource: any;
  showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public modalCtrl: ModalController, public zone: NgZone) {
      this.ministerio = db.object("/ministerios/5");
      this.ministerio.subscribe(data => {

      });

      firebase.storage().ref().child('ministerios/danca.jpg').getDownloadURL().then((url) => {
          this.zone.run(() => {
              this.imgsource = url;
          })
      })
  }

  openContato() {
    let modal = this.modalCtrl.create(ContatoModalPage, {ministerio: 5});
    modal.present();
  }

  showSpinnerMeth() {
      this.showSpinner = false;
  }

}
