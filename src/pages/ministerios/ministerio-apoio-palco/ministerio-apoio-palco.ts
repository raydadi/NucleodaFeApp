import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ContatoModalPage } from '../contato-modal/contato-modal'

@IonicPage()
@Component({
  selector: 'page-ministerio-apoio-palco',
  templateUrl: 'ministerio-apoio-palco.html',
})
export class MinisterioApoioPalcoPage {
    ministerio: FirebaseObjectObservable<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public modalCtrl: ModalController) {
        this.ministerio = db.object("/ministerios/1");
        this.ministerio.subscribe(data => {

        });
    }

    openContato() {
      let modal = this.modalCtrl.create(ContatoModalPage, {ministerio: 1});
      modal.present();
    }

}
