import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-quem-procurar-acampamento',
  templateUrl: 'quem-procurar-acampamento.html',
})
export class QuemProcurarAcampamentoPage {
    quemProcurarList: FirebaseListObservable<any>;
    showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
      this.quemProcurarList = db.list("/acampamento-jovens/quemprocurar", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.quemProcurarList.subscribe(data => {
          this.showSpinner = false;
      })
  }

}
