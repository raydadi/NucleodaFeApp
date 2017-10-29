import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviarPushPage } from './enviar-push';

@NgModule({
  declarations: [
    EnviarPushPage,
  ],
  imports: [
    IonicPageModule.forChild(EnviarPushPage),
  ],
})
export class EnviarPushPageModule {}
