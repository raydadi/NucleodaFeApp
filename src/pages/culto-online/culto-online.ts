import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireOfflineDatabase, AfoObjectObservable } from 'angularfire2-offline/database';

@IonicPage()
@Component({
  selector: 'page-culto-online',
  templateUrl: 'culto-online.html',
})
export class CultoOnlinePage {
    cultoOnline: AfoObjectObservable<any>;
    showSpinner: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireOfflineDatabase) {
      this.cultoOnline = db.object("/culto-online");

  }

  ionViewDidLoad() {
      this.cultoOnline.subscribe(data => {
          this.showSpinner = false
      });
  }

  openExternalBrowser() {
      window.open("https://www.youtube.com/user/nucleodafe/live", '_system', 'location=no');
  }
}
