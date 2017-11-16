import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushGalleryPage } from './push-gallery';

@NgModule({
  declarations: [
    PushGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(PushGalleryPage),
  ],
})
export class PushGalleryPageModule {}
