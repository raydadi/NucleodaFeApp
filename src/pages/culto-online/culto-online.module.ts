import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CultoOnlinePage } from './culto-online';

@NgModule({
  declarations: [
    CultoOnlinePage,
  ],
  imports: [
    IonicPageModule.forChild(CultoOnlinePage),
  ],
  exports: [
    CultoOnlinePage
  ]
})
export class CultoOnlinePageModule {}
