import { Component,NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireOfflineDatabase, AfoListObservable } from 'angularfire2-offline/database';
import { PequenoNucleoDetailPage } from './pequeno-nucleo-detail/pequeno-nucleo-detail';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { PequenoNucleoPopoverPage } from './pequeno-nucleo-popover/pequeno-nucleo-popover';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-pequeno-nucleo',
  templateUrl: 'pequeno-nucleo.html',
})
export class PequenoNucleoPage {
  pequenosNucleos: AfoListObservable<any>;
  showSpinner: boolean = true;
  // imgsource: any;
  imgsource: Array<any> = [];
  pequenosNucleosArray: Array<any> = [];

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverList', { read: ElementRef }) text: ElementRef;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireOfflineDatabase,
      public zone: NgZone,
      public popoverCtrl: PopoverController,
      private screen: ScreenOrientation
  ) {
      this.pequenosNucleos = db.list("/pequenos-nucleos", {
        query: {
          orderByChild: 'ordem'
        }
      });

      // this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE);
  }

  ionViewDidLoad() {
      // firebase.storage().ref().child("pequeno-nucleo/normal.svg").getDownloadURL().then((url) => {
      //   this.zone.run(() => {
      //     this.imgsource = url;
      //   })
      // })

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

  // ionViewWillLeave() {
  //     this.screen.lock(this.screen.ORIENTATIONS.PORTRAIT);
  // }

  open(key) {
      this.navCtrl.push(PequenoNucleoDetailPage,{
          data: this.pequenosNucleosArray[key]
      });
  }

  openFiltros() {

  }

  showSpinnerMeth() {
      this.showSpinner = false;
  }

  presentPopover(ev){
    let popover = this.popoverCtrl.create(PequenoNucleoPopoverPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement,
      list: this.pequenosNucleosArray
    });
    popover.present({
      ev: ev
    });
  }
}
