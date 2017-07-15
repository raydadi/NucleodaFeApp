import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaSedePage } from './mapa-sede';

@NgModule({
  declarations: [
    MapaSedePage,
  ],
  imports: [
    IonicPageModule.forChild(MapaSedePage),
  ],
  exports: [
    MapaSedePage
  ]
})
export class MapaSedePageModule {}
