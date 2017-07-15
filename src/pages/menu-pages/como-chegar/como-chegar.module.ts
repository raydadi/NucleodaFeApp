import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComoChegarPage } from './como-chegar';

@NgModule({
  declarations: [
    ComoChegarPage,
  ],
  imports: [
    IonicPageModule.forChild(ComoChegarPage),
  ],
  exports: [
    ComoChegarPage
  ]
})
export class ComoChegarPageModule {}
