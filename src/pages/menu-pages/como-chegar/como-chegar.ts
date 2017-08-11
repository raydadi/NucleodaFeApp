import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MapaArniqueirasPage } from './mapa-arniqueiras/mapa-arniqueiras';
import { MapaSedePage } from './mapa-sede/mapa-sede';

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

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComoChegarPage');
    this.initMap();
  }

  initMap(){
    let latLng = new google.maps.LatLng(-15.868127, 47.970437);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  navToSede() {
      this.navCtrl.push(MapaSedePage);
  }

  navToArniqueiras() {
      this.navCtrl.push(MapaArniqueirasPage);
  }
}
