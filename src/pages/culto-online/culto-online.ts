import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the CultoOnlinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-culto-online',
  templateUrl: 'culto-online.html',
})
export class CultoOnlinePage {
    msg: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase,) {
      this.msg = db.object("/culto-online");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CultoOnlinePage');
  }

  openExternalBrowser() {
      window.open("https://www.youtube.com/user/nucleodafe/live", '_system', 'location=no');
  }
}
