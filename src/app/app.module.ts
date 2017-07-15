import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/menu-pages/login/login';
import { SobrePage } from '../pages/menu-pages/sobre/sobre';
import { EquipePastoralPage } from '../pages/menu-pages/equipe-pastoral/equipe-pastoral';
import { ComoChegarPage } from '../pages/menu-pages/como-chegar/como-chegar';
import { ComoContribuirPage } from '../pages/menu-pages/como-contribuir/como-contribuir';
import { FaleConoscoPage } from '../pages/menu-pages/fale-conosco/fale-conosco';
import { MapaArniqueirasPage } from '../pages/menu-pages/como-chegar/mapa-arniqueiras/mapa-arniqueiras';
import { MapaSedePage} from '../pages/menu-pages/como-chegar/mapa-sede/mapa-sede';
import { TestemunhosPage } from '../pages/testemunhos/testemunhos';
import { PedidoOracaoPage } from '../pages/pedido-oracao/pedido-oracao';
import { MinisteriosPage } from '../pages/ministerios/ministerios';
import { PopoverNotificationPage } from '../pages/menu-pages/popover-notification/popover-notification';
import { PopoverPage } from '../pages/home/home';
import { AvisosPage } from '../pages/avisos/avisos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SobrePage,
    EquipePastoralPage,
    ComoChegarPage,
    ComoContribuirPage,
    FaleConoscoPage,
    MapaSedePage,
    MapaArniqueirasPage,
    TestemunhosPage,
    PedidoOracaoPage,
    MinisteriosPage,
    PopoverNotificationPage,
    PopoverPage,
    AvisosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SobrePage,
    EquipePastoralPage,
    ComoChegarPage,
    ComoContribuirPage,
    FaleConoscoPage,
    MapaSedePage,
    MapaArniqueirasPage,
    TestemunhosPage,
    PedidoOracaoPage,
    MinisteriosPage,
    PopoverNotificationPage,
    PopoverPage,
    AvisosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
