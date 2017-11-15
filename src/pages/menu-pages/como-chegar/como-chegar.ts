import { Component, NgZone } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { ComoChegarDetailPage } from './como-chegar-detail/como-chegar-detail'

import * as firebase from 'firebase/app';
import 'firebase/storage';

declare var google;

@IonicPage()
@Component({
  selector: 'page-como-chegar',
  templateUrl: 'como-chegar.html',
})
export class ComoChegarPage {
  comoChegar: FirebaseListObservable<any>;
  imgsource: Array<any> = [];
  showSpinner: boolean = true;
  comoChegarArray: Array<any> = [];

  constructor(
      public navCtrl: NavController,
      public db: AngularFireDatabase,
      public zone: NgZone
  ) {
      this.comoChegar = db.list("/como-chegar",{
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
    this.comoChegar.subscribe(data => {

      this.comoChegarArray = data;

      data.forEach((local, index) => {

        firebase.storage().ref().child(local.fotoRef).getDownloadURL().then((url) => {
          this.zone.run(() => {
            this.imgsource[local.$key] = url;
          })
        })

        if(index == data.length-1) {
            this.showSpinner = false;
        }
      });
    });

  }

  open(key) {

      this.navCtrl.push(ComoChegarDetailPage,{
          data: this.comoChegarArray[key]
      });

    // switch (key) {
    //   case "0":
    //     this.navCtrl.push(MapaSedePage,{
    //         data: this.comoChegarArray[0]
    //     });
    //     break;
    //   case "1":
    //     this.navCtrl.push(MapaArniqueirasPage,{
    //         data: this.comoChegarArray[1]
    //     });
    //     break;
    //   case "2":
    //     this.navCtrl.push(MapaChacaraPage,{
    //         data: this.comoChegarArray[2]
    //     });
    //     break;
    // }
  }
}
