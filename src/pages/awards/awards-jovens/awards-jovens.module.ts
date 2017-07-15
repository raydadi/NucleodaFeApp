import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AwardsJovensPage } from './awards-jovens';

@NgModule({
  declarations: [
    AwardsJovensPage,
  ],
  imports: [
    IonicPageModule.forChild(AwardsJovensPage),
  ],
  exports: [
    AwardsJovensPage
  ]
})
export class AwardsJovensPageModule {}
