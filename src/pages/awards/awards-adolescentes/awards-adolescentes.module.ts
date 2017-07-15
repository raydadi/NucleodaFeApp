import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AwardsAdolescentesPage } from './awards-adolescentes';

@NgModule({
  declarations: [
    AwardsAdolescentesPage,
  ],
  imports: [
    IonicPageModule.forChild(AwardsAdolescentesPage),
  ],
  exports: [
    AwardsAdolescentesPage
  ]
})
export class AwardsAdolescentesPageModule {}
