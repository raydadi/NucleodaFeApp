import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-devocional-acampamento',
  templateUrl: 'devocional-acampamento.html',
})
export class DevocionalAcampamentoPage {
    devocionais: FirebaseListObservable<any>;
    showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
      this.devocionais = db.list("/acampamento-jovens/devocionais", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.devocionais.subscribe(data => {
          this.showSpinner = false;
      })
  }

}
