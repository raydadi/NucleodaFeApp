import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcampamentoAdolescentesPage } from './acampamento-adolescentes';

@NgModule({
  declarations: [
    AcampamentoAdolescentesPage,
  ],
  imports: [
    IonicPageModule.forChild(AcampamentoAdolescentesPage),
  ],
  exports: [
    AcampamentoAdolescentesPage
  ]
})
export class AcampamentoAdolescentesPageModule {}
