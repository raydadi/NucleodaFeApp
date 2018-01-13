import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevocionalDetailPage } from './devocional-detail';

@NgModule({
  declarations: [
    DevocionalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DevocionalDetailPage),
  ],
})
export class DevocionalDetailPageModule {}
