import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlexAnnePage } from './alex-anne';

@NgModule({
  declarations: [
    AlexAnnePage,
  ],
  imports: [
    IonicPageModule.forChild(AlexAnnePage),
  ],
})
export class AlexAnnePageModule {}
