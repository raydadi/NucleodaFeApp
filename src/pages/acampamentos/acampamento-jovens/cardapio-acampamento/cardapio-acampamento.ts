import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-cardapio-acampamento',
  templateUrl: 'cardapio-acampamento.html',
})
export class CardapioAcampamentoPage {
  cardapios: FirebaseListObservable<any>;
  showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
      this.cardapios = db.list("/acampamento-jovens/cardapio", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.cardapios.subscribe(data => {
          this.showSpinner = false;
      })
  }

}
