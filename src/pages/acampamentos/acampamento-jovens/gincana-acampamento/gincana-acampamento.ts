import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-gincana-acampamento',
  templateUrl: 'gincana-acampamento.html',
})
export class GincanaAcampamentoPage {
    gincana: FirebaseListObservable<any>;
    showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
      this.gincana = db.list("/acampamento-jovens/gincana", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.gincana.subscribe(data => {
          this.showSpinner = false;
      })
  }

}
