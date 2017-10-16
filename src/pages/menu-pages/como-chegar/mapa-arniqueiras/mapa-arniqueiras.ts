import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa-arniqueiras',
  templateUrl: 'mapa-arniqueiras.html',
})
export class MapaArniqueirasPage {

  @ViewChild('map') mapElement;
  map: any;

  local: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.local = this.navParams.get('data');
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
      let latitude = this.local.geolocalizacao.latitude;
      let longitude = this.local.geolocalizacao.longitude;
      let zoom = this.local.geolocalizacao.zoom;

    let latLng = new google.maps.LatLng(latitude, longitude);

    let mapOptions = {
      center: latLng,
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
