import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

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
import { AvisosPage } from '../pages/avisos/avisos';
import { WelcomeTutorialPage } from '../pages/welcome-tutorial/welcome-tutorial';
import { AwardsJovensPage } from '../pages/awards/awards-jovens/awards-jovens';
import { AcampamentoJovensPage } from '../pages/acampamentos/acampamento-jovens/acampamento-jovens';
import { CultoOnlinePage } from '../pages/culto-online/culto-online';
import { SinoPage } from '../pages/menu-pages/sino/sino';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as CONST from '../constants';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

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
    AvisosPage,
    WelcomeTutorialPage,
    CultoOnlinePage,
    AcampamentoJovensPage,
    AwardsJovensPage,
    SinoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONST.FIREBASE_CONFIG)
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
    AvisosPage,
    WelcomeTutorialPage,
    CultoOnlinePage,
    AcampamentoJovensPage,
    AwardsJovensPage,
    SinoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    GooglePlus,
    Facebook,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
