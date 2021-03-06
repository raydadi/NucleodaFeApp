import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-inscricoes',
  templateUrl: 'inscricoes.html',
})
export class InscricoesPage {
    inscricoes: Observable<any[]>;
    imgsource: Array<any> = [];
    showSpinner: boolean = true;
    inscricoesArray: Array<any> = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireDatabase,
      public zone: NgZone
  ) {
      this.inscricoes = db.list("/inscricoes", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.inscricoes.subscribe(data => {

        this.inscricoesArray = data;

        data.forEach((inscricoes, index) => {

          firebase.storage().ref().child(inscricoes.fotoRef).getDownloadURL().then((url) => {
            this.zone.run(() => {
              this.imgsource[inscricoes.$key] = url;
            })
          })

          if(index == data.length-1) {
              this.showSpinner = false;
          }
        });

      });
  }

  open(key) {

      window.open(this.inscricoesArray[key].url, '_blank', 'location=yes');
  }


}
