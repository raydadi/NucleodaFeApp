import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComoContribuirPage } from './como-contribuir';

@NgModule({
  declarations: [
    ComoContribuirPage,
  ],
  imports: [
    IonicPageModule.forChild(ComoContribuirPage),
  ],
  exports: [
    ComoContribuirPage
  ]
})
export class ComoContribuirPageModule {}
