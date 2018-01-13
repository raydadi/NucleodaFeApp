import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuartoDetailPage } from './quarto-detail';

@NgModule({
  declarations: [
    QuartoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QuartoDetailPage),
  ],
})
export class QuartoDetailPageModule {}
