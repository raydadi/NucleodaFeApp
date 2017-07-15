import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoOracaoPage } from './pedido-oracao';

@NgModule({
  declarations: [
    PedidoOracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoOracaoPage),
  ],
  exports: [
    PedidoOracaoPage
  ]
})
export class PedidoOracaoPageModule {}
