import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa-arniqueiras',
  templateUrl: 'mapa-arniqueiras.html',
})
export class MapaArniqueirasPage {

  @ViewChild('map') mapElement;
  map: any;

  local: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
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

  openLocal() {
    if (this.platform.is('ios')) {
      window.open('maps://?q=' + this.local.nome + '&saddr=' + this.local.geolocalizacao.latitude + ',' + this.local.geolocalizacao.longitude + '&daddr=' + this.local.geolocalizacao.latitude + ',' + this.local.geolocalizacao.longitude, '_system');
    };
    // android
    if (this.platform.is('android')) {
      window.open('geo://' + this.local.geolocalizacao.latitude + ',' + this.local.geolocalizacao.longitude + '?q=' + this.local.geolocalizacao.latitude + ',' + this.local.geolocalizacao.longitude + '(' + this.local.nome + ')', '_system');
    };
  }
}
