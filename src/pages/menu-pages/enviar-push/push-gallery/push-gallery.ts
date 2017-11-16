import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-push-gallery',
  templateUrl: 'push-gallery.html',
})
export class PushGalleryPage {

    imgList: FirebaseListObservable<any>;
    imgsource: Array<any> = [];
    showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public db: AngularFireDatabase, public zone: NgZone) {
      this.imgList = db.list("/push-gallery");
  }

  ionViewDidLoad() {
      this.imgList.subscribe(data => {

          this.imgsource = data;

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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
