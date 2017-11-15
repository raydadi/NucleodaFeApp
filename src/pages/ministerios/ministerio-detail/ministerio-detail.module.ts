import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinisterioDetailPage } from './ministerio-detail';

@NgModule({
  declarations: [
    MinisterioDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MinisterioDetailPage),
  ],
})
export class MinisterioDetailPageModule {}
