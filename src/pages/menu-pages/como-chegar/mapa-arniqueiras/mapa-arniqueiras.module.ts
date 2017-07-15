import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaArniqueirasPage } from './mapa-arniqueiras';

@NgModule({
  declarations: [
    MapaArniqueirasPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaArniqueirasPage),
  ],
  exports: [
    MapaArniqueirasPage
  ]
})
export class MapaArniqueirasPageModule {}
