import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-escalas-acampamento',
  templateUrl: 'escalas-acampamento.html',
})
export class EscalasAcampamentoPage {
    escalas: FirebaseListObservable<any>;
    showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
      this.escalas = db.list("/acampamento-jovens/escalas", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.escalas.subscribe(data => {
          this.showSpinner = false;
      })
  }

}
