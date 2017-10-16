import { Component, NgZone } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { MapaArniqueirasPage } from './mapa-arniqueiras/mapa-arniqueiras';
import { MapaSedePage } from './mapa-sede/mapa-sede';
import { MapaChacaraPage } from './mapa-chacara/mapa-chacara';

import * as firebase from 'firebase/app';
import 'firebase/storage';

declare var google;

@IonicPage()
@Component({
  selector: 'page-como-chegar',
  templateUrl: 'como-chegar.html',
})
export class ComoChegarPage {

  @ViewChild('map') mapElement;
  map: any;

  @ViewChild('map2') map2Element;
  map2: any;

  @ViewChild('map3') map3Element;
  map3: any;

  comoChegar: FirebaseListObservable<any>;
  imgsource: Array<any> = [];
  showSpinner: boolean = true;

  constructor(
      public navCtrl: NavController,
      public db: AngularFireDatabase,
      public zone: NgZone
  ) {
      this.comoChegar = db.list("/como-chegar");
  }

  ionViewDidLoad() {
    // this.initMapBandeirante();
    // this.initMapArniqueira();
    // this.initMapChacara();

    this.comoChegar.subscribe(data => {

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

    switch (key) {
      case "0":
        this.navCtrl.push(MapaSedePage);
        break;
      case "1":
        this.navCtrl.push(MapaArniqueirasPage);
        break;
      case "2":
        this.navCtrl.push(MapaChacaraPage);
        break;
    }
  }

  initMapBandeirante(){
    let latLng = new google.maps.LatLng(-15.868119, -47.970526);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  initMapArniqueira(){
    let latLng = new google.maps.LatLng(-15.856191, -47.996769);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.map2Element.nativeElement, mapOptions);
  }

  initMapChacara(){
    let latLng = new google.maps.LatLng(-16.182161, -47.962878);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.map3Element.nativeElement, mapOptions);
  }

  navToSede() {
      this.navCtrl.push(MapaSedePage);
  }

  navToArniqueiras() {
      this.navCtrl.push(MapaArniqueirasPage);
  }
}
