import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InscricoesPage } from './inscricoes';

@NgModule({
  declarations: [
    InscricoesPage,
  ],
  imports: [
    IonicPageModule.forChild(InscricoesPage),
  ],
  exports: [
    InscricoesPage
  ]
})
export class InscricoesPageModule {}
