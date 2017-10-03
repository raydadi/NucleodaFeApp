import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ContatoModalPage } from '../contato-modal/contato-modal'

/**
 * Generated class for the MinisterioPequenosNucleosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministerio-pequenos-nucleos',
  templateUrl: 'ministerio-pequenos-nucleos.html',
})
export class MinisterioPequenosNucleosPage {
  ministerio: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public modalCtrl: ModalController) {
      this.ministerio = db.object("/ministerios/15");
      this.ministerio.subscribe(data => {

      });
  }

  openContato() {
    let modal = this.modalCtrl.create(ContatoModalPage, {ministerio: 15});
    modal.present();
  }

}