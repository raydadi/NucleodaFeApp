import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { IbiAlicePage } from './ibi-alice/ibi-alice'
import { AlexAnnePage } from './alex-anne/alex-anne'
import { EduardoClaudiaPage } from './eduardo-claudia/eduardo-claudia'
import { HiltonHandreaPage } from './hilton-handrea/hilton-handrea'
import { PauloCinaraPage } from './paulo-cinara/paulo-cinara'
import { DarciSarahPage } from './darci-sarah/darci-sarah'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public modalCtrl: ModalController, public zone: NgZone) {
    this.equipePastoral = db.list("/equipe-pastoral");
  }


  // ionViewDidLoad() {
  //     this.cultoOnline.subscribe(data => {
  //         this.showSpinner = false
  //     });
  // }

  ionViewDidLoad() {
      this.equipePastoral.subscribe(data => {

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

    switch (key) {
      case "0":
        this.navCtrl.push(IbiAlicePage);
        break;
      case "1":
        this.navCtrl.push(AlexAnnePage);
        break;
      case "2":
        this.navCtrl.push(EduardoClaudiaPage);
        break;
      case "3":
        this.navCtrl.push(HiltonHandreaPage);
        break;
      case "4":
        this.navCtrl.push(PauloCinaraPage);
        break;
      case "5":
        this.navCtrl.push(DarciSarahPage);
        break;
    }
  }
}
