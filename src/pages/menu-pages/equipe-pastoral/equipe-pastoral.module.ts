import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipePastoralPage } from './equipe-pastoral';

@NgModule({
  declarations: [
    EquipePastoralPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipePastoralPage),
  ],
  exports: [
    EquipePastoralPage
  ]
})
export class EquipePastoralPageModule {}
