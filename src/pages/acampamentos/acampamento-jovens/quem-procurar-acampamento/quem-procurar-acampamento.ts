import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-quem-procurar-acampamento',
  templateUrl: 'quem-procurar-acampamento.html',
})
export class QuemProcurarAcampamentoPage {
    quemProcurarList: FirebaseListObservable<any>;
    showSpinner: boolean = true;
    imgsource: Array<any> = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireDatabase,
      public zone: NgZone
  ) {
      this.quemProcurarList = db.list("/acampamento-jovens/quemprocurar", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.quemProcurarList.subscribe(data => {

        data.forEach((quemProcurar, index) => {

          firebase.storage().ref().child(quemProcurar.fotoRef).getDownloadURL().then((url) => {
            this.zone.run(() => {
              this.imgsource[quemProcurar.$key] = url;
            })
          })

          if(index == data.length-1) {
              this.showSpinner = false;
          }
        });
      });
  }

}
