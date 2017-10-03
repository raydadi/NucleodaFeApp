import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ContatoModalPage } from '../contato-modal/contato-modal'

/**
 * Generated class for the MiniesterioDancaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-miniesterio-danca',
  templateUrl: 'miniesterio-danca.html',
})
export class MiniesterioDancaPage {
  ministerio: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public modalCtrl: ModalController) {
      this.ministerio = db.object("/ministerios/5");
      this.ministerio.subscribe(data => {

      });
  }

  openContato() {
    let modal = this.modalCtrl.create(ContatoModalPage, {ministerio: 5});
    modal.present();
  }

}
