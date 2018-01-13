import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DevocionalDetailPage } from "./devocional-detail/devocional-detail";

@IonicPage()
@Component({
  selector: 'page-devocional-acampamento',
  templateUrl: 'devocional-acampamento.html',
})
export class DevocionalAcampamentoPage {
    devocionais: FirebaseListObservable<any>;
    showSpinner: boolean = true;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireDatabase,
      public modalCtrl: ModalController
  ) {
      this.devocionais = db.list("/acampamento-jovens/devocionais", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.devocionais.subscribe(data => {
          this.showSpinner = false;
      });
  }

  getShortText(text) {
      text = text.replace(/<\/?[^>]+(>|$)/g, "");
      if (text.length > 150) {
          return text.slice(0, 150) + "...";
      }
      return text;
  }

  openDev(devocional){
      console.log("Abri");
      let modal = this.modalCtrl.create(DevocionalDetailPage, {data: devocional});
      modal.present();
  }

}
