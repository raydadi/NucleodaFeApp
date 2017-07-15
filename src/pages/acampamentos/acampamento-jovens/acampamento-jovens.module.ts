import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcampamentoJovensPage } from './acampamento-jovens';

@NgModule({
  declarations: [
    AcampamentoJovensPage,
  ],
  imports: [
    IonicPageModule.forChild(AcampamentoJovensPage),
  ],
  exports: [
    AcampamentoJovensPage
  ]
})
export class AcampamentoJovensPageModule {}
