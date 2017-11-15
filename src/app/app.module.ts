import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { TextMaskModule } from 'angular2-text-mask';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/menu-pages/login/login';
import { SobrePage } from '../pages/menu-pages/sobre/sobre';
import { EquipePastoralPage } from '../pages/menu-pages/equipe-pastoral/equipe-pastoral';
import { ComoChegarPage } from '../pages/menu-pages/como-chegar/como-chegar';
import { ComoContribuirPage } from '../pages/menu-pages/como-contribuir/como-contribuir';
import { FaleConoscoPage } from '../pages/menu-pages/fale-conosco/fale-conosco';
import { ComoChegarDetailPage } from '../pages/menu-pages/como-chegar/como-chegar-detail/como-chegar-detail';
import { EnviarPushPage } from "../pages/menu-pages/enviar-push/enviar-push";

import { TestemunhosPage } from '../pages/testemunhos/testemunhos';
import { PedidoOracaoPage } from '../pages/pedido-oracao/pedido-oracao';
import { MinisteriosPage } from '../pages/ministerios/ministerios';
import { ContatoModalPage } from '../pages/ministerios/contato-modal/contato-modal';
import { MinisterioDetailPage } from '../pages/ministerios/ministerio-detail/ministerio-detail';
import { PopoverNotificationPage } from '../pages/menu-pages/popover-notification/popover-notification';
import { AvisosPage } from '../pages/avisos/avisos';
import { WelcomeTutorialPage } from '../pages/welcome-tutorial/welcome-tutorial';
import { AwardsJovensPage } from '../pages/awards/awards-jovens/awards-jovens';
import { AcampamentoJovensPage } from '../pages/acampamentos/acampamento-jovens/acampamento-jovens';
import { CultoOnlinePage } from '../pages/culto-online/culto-online';
import { SinoPage } from '../pages/menu-pages/sino/sino';
import { ModalPedidosOracaoPage } from '../pages/pedido-oracao/modal-pedidos-oracao/modal-pedidos-oracao';
import { PequenoNucleoPage } from '../pages/pequeno-nucleo/pequeno-nucleo';
import { MenuPage } from '../pages/menu-pages/menu/menu';
import { InscricoesPage } from '../pages/inscricoes/inscricoes';

import { EquipePastoralDetailPage } from '../pages/menu-pages/equipe-pastoral/equipe-pastoral-detail/equipe-pastoral-detail';

import { PequenoNucleoPopoverPage } from '../pages/pequeno-nucleo/pequeno-nucleo-popover/pequeno-nucleo-popover';
import { PequenoNucleoDetailPage } from '../pages/pequeno-nucleo/pequeno-nucleo-detail/pequeno-nucleo-detail';

import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireOfflineModule } from 'angularfire2-offline';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

import * as CONST from '../constants';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SobrePage,
    EquipePastoralPage,
    ComoChegarPage,
    ComoContribuirPage,
    FaleConoscoPage,
    ComoChegarDetailPage,
    TestemunhosPage,
    PedidoOracaoPage,
    MinisteriosPage,
    PopoverNotificationPage,
    AvisosPage,
    WelcomeTutorialPage,
    CultoOnlinePage,
    AcampamentoJovensPage,
    AwardsJovensPage,
    SinoPage,
    ModalPedidosOracaoPage,
    PequenoNucleoPage,
    MenuPage,
    MinisterioDetailPage,
    ContatoModalPage,
    EquipePastoralDetailPage,
    LoadingSpinnerComponent,
    PequenoNucleoDetailPage,
    PequenoNucleoPopoverPage,
    EnviarPushPage,
    InscricoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONST.FIREBASE_CONFIG),
    TextMaskModule,
    AngularFireOfflineModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SobrePage,
    EquipePastoralPage,
    ComoChegarPage,
    ComoContribuirPage,
    FaleConoscoPage,
    ComoChegarDetailPage,
    TestemunhosPage,
    PedidoOracaoPage,
    MinisteriosPage,
    PopoverNotificationPage,
    AvisosPage,
    WelcomeTutorialPage,
    CultoOnlinePage,
    AcampamentoJovensPage,
    AwardsJovensPage,
    SinoPage,
    ModalPedidosOracaoPage,
    PequenoNucleoPage,
    MenuPage,
    ContatoModalPage,
    MinisterioDetailPage,
    EquipePastoralDetailPage,
    LoadingSpinnerComponent,
    PequenoNucleoDetailPage,
    PequenoNucleoPopoverPage,
    EnviarPushPage,
    InscricoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    GooglePlus,
    Facebook,
    Toast,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    LoadingSpinnerComponent,
    Push,
    File,
    Transfer,
    Camera,
    FilePath
  ]
})
export class AppModule {}
