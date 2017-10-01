import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-paulo-cinara',
  templateUrl: 'paulo-cinara.html',
})
export class PauloCinaraPage {
    imgsource: any;
    equipePastoral: FirebaseObjectObservable<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase, public zone: NgZone) {
        this.equipePastoral = db.object("/equipe-pastoral/4");
        this.equipePastoral.subscribe(data => {

        });
        firebase.storage().ref().child('equipe-pastoral/paulo-cinara.jpg').getDownloadURL().then((url) => {
            this.zone.run(() => {
                this.imgsource = url;
            })
        })
    }
}
