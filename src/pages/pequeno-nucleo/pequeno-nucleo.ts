import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireOfflineDatabase, AfoListObservable } from 'angularfire2-offline/database';
import { PequenoNucleoDetailPage } from './pequeno-nucleo-detail/pequeno-nucleo-detail';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { PequenoNucleoPopoverPage } from './pequeno-nucleo-popover/pequeno-nucleo-popover';

@IonicPage()
@Component({
  selector: 'page-pequeno-nucleo',
  templateUrl: 'pequeno-nucleo.html',
})
export class PequenoNucleoPage {
  pequenosNucleos: AfoListObservable<any>;
  showSpinner: boolean = true;
  imgsource: Array<any> = [];
  pequenosNucleosArray: Array<any> = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireOfflineDatabase,
      public zone: NgZone,
      public popoverCtrl: PopoverController
  ) {
      this.pequenosNucleos = db.list("/pequenos-nucleos", {
        query: {
          orderByChild: 'ordem'
        }
      });
  }

  ionViewDidLoad() {
    this.pequenosNucleos.subscribe(data => {

      this.pequenosNucleosArray = data;

      data.forEach((pequenoNucleo, index) => {

        firebase.storage().ref().child(pequenoNucleo.fotoRef).getDownloadURL().then((url) => {
          this.zone.run(() => {
            this.imgsource[pequenoNucleo.$key] = url;
          })
        })

        if(index == data.length-1) {
            this.showSpinner = false;
        }
      });
    });
  }

  open(key) {
      this.navCtrl.push(PequenoNucleoDetailPage,{
          data: this.pequenosNucleosArray[key]
      });
  }

  openFiltros() {

  }

  presentPopover(){
    let popover = this.popoverCtrl.create(PequenoNucleoPopoverPage);
    popover.present();
  }
}
