import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MapaArniqueirasPage } from './mapa-arniqueiras/mapa-arniqueiras';
import { MapaSedePage } from './mapa-sede/mapa-sede';

declare var google;

/**
 * Generated class for the ComoChegarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComoChegarPage');
    this.initMapBandeirante();
    this.initMapArniqueira();
    this.initMapChacara();
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
