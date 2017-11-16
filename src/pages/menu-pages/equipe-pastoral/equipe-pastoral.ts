import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { EquipePastoralDetailPage } from './equipe-pastoral-detail/equipe-pastoral-detail'

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-equipe-pastoral',
  templateUrl: 'equipe-pastoral.html',
})
export class EquipePastoralPage {
  equipePastoral: FirebaseListObservable<any>;
  imgsource: Array<any> = [];
  showSpinner: boolean = true;
  equipePastoralArray: Array<any> = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireDatabase,
      public modalCtrl: ModalController,
      public zone: NgZone
  ) {
    this.equipePastoral = db.list("/equipe-pastoral", {
      query: {
        orderByChild: 'ordem'
      }
    });
  }

  ionViewDidLoad() {
      this.equipePastoral.subscribe(data => {

        this.equipePastoralArray = data;

        data.forEach((pastor, index) => {

          firebase.storage().ref().child(pastor.fotoRef).getDownloadURL().then((url) => {
            this.zone.run(() => {
              this.imgsource[pastor.$key] = url;
            })
          })

          if(index == data.length-1) {
              this.showSpinner = false;
          }
        });
      });

  }

  open(key) {
      this.navCtrl.push(EquipePastoralDetailPage,{
          data: this.equipePastoralArray[key]
      });
    // switch (key) {
    //   case "0":
    //     this.navCtrl.push(IbiAlicePage,{
    //         data: this.equipePastoralArray[0]
    //     });
    //     break;
    //   case "1":
    //     this.navCtrl.push(AlexAnnePage,{
    //         data: this.equipePastoralArray[1]
    //     });
    //     break;
    //   case "2":
    //     this.navCtrl.push(EduardoClaudiaPage,{
    //         data: this.equipePastoralArray[2]
    //     });
    //     break;
    //   case "3":
    //     this.navCtrl.push(HiltonHandreaPage,{
    //         data: this.equipePastoralArray[3]
    //     });
    //     break;
    //   case "4":
    //     this.navCtrl.push(PauloCinaraPage,{
    //         data: this.equipePastoralArray[4]
    //     });
    //     break;
    //   case "5":
    //     this.navCtrl.push(DarciSarahPage,{
    //         data: this.equipePastoralArray[5]
    //     });
    //     break;
    // }
  }
}
