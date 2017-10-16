import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaChacaraPage } from './mapa-chacara';

@NgModule({
  declarations: [
    MapaChacaraPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaChacaraPage),
  ],
})
export class MapaChacaraPageModule {}
