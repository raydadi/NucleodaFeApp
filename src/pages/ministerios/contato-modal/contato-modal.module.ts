import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatoModalPage } from './contato-modal';

@NgModule({
  declarations: [
    ContatoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatoModalPage),
  ],
})
export class ContatoModalPageModule {}
