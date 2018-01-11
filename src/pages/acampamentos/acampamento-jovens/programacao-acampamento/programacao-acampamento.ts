import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-programacao-acampamento',
  templateUrl: 'programacao-acampamento.html',
})
export class ProgramacaoAcampamentoPage {
    programacoes: FirebaseListObservable<any>;
    showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
      this.programacoes = db.list("/acampamento-jovens/programacao", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.programacoes.subscribe(data => {
          this.showSpinner = false;
      })
  }

}
