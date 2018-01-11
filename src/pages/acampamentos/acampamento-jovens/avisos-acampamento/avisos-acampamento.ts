import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-avisos-acampamento',
  templateUrl: 'avisos-acampamento.html',
})
export class AvisosAcampamentoPage {
    avisos: FirebaseListObservable<any>;
    showSpinner: boolean = true;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireDatabase
  ){
      this.avisos = db.list("/acampamento-jovens/avisos", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
      this.avisos.subscribe(data => {
          this.showSpinner = false;
      })

      // this.avisos.subscribe(data => {
      //
      //     this.ministeriosArray = data;
      //
      //   data.forEach((ministerio, index) => {
      //
      //     firebase.storage().ref().child(ministerio.fotoRef).getDownloadURL().then((url) => {
      //       this.zone.run(() => {
      //         this.imgsource[ministerio.$key] = url;
      //       })
      //     })
      //
      //     if (index == data.length - 1) {
      //       this.showSpinner = false;
      //     }
      //   });
      // });
  }

}
