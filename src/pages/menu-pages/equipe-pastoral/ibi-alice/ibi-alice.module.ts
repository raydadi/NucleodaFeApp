import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IbiAlicePage } from './ibi-alice';

@NgModule({
  declarations: [
    IbiAlicePage,
  ],
  imports: [
    IonicPageModule.forChild(IbiAlicePage),
  ],
})
export class IbiAlicePageModule {}
