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
import { MinisterioRecepcaoPage } from '../pages/ministerios/ministerio-recepcao/ministerio-recepcao';
import { MinisterioPalavraPage } from '../pages/ministerios/ministerio-palavra/ministerio-palavra';
import { MinisterioOver30Page } from '../pages/ministerios/ministerio-over30/ministerio-over30';
import { MinisterioSentinelasPage } from '../pages/ministerios/ministerio-sentinelas/ministerio-sentinelas';
import { MinisterioPequenosNucleosPage } from '../pages/ministerios/ministerio-pequenos-nucleos/ministerio-pequenos-nucleos';
import { MinisterioNucleoJovemPage } from '../pages/ministerios/ministerio-nucleo-jovem/ministerio-nucleo-jovem';
import { MinisterioNucleoEnsinoPage } from '../pages/ministerios/ministerio-nucleo-ensino/ministerio-nucleo-ensino';
import { MinisterioLibertacaoPage } from '../pages/ministerios/ministerio-libertacao/ministerio-libertacao';
import { MinisterioFamiliaPage } from '../pages/ministerios/ministerio-familia/ministerio-familia';
import { MinisterioEvangelismoPage } from '../pages/ministerios/ministerio-evangelismo/ministerio-evangelismo';
import { MinisterioEstruturaPage } from '../pages/ministerios/ministerio-estrutura/ministerio-estrutura';
import { MinisterioNucleoKidsPage } from '../pages/ministerios/ministerio-nucleo-kids/ministerio-nucleo-kids';
import { MinisterioCozinhaPage } from '../pages/ministerios/ministerio-cozinha/ministerio-cozinha';
import { MinisterioAcaoSocialPage } from '../pages/ministerios/ministerio-acao-social/ministerio-acao-social';
import { MinisterioTeatroPage } from '../pages/ministerios/ministerio-teatro/ministerio-teatro';
import { MinisterioMultimidiaPage } from '../pages/ministerios/ministerio-multimidia/ministerio-multimidia';
import { MinisterioLouvorPage } from '../pages/ministerios/ministerio-louvor/ministerio-louvor';
import { MinisterioIntercessaoPage } from '../pages/ministerios/ministerio-intercessao/ministerio-intercessao';
import { MinisterioDancaPage } from '../pages/ministerios/ministerio-danca/ministerio-danca';
import { MinisterioComunicacaoPage } from '../pages/ministerios/ministerio-comunicacao/ministerio-comunicacao';
import { MinisterioArtesanatoPage } from '../pages/ministerios/ministerio-artesanato/ministerio-artesanato';
import { MinisterioCoralPage } from '../pages/ministerios/ministerio-coral/ministerio-coral';
import { MinisterioApoioPalcoPage } from '../pages/ministerios/ministerio-apoio-palco/ministerio-apoio-palco';
import { MinisterioAcolhimentoPage } from '../pages/ministerios/ministerio-acolhimento/ministerio-acolhimento';
import { ContatoModalPage } from '../pages/ministerios/contato-modal/contato-modal';
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
    MinisterioRecepcaoPage,
    MinisterioPalavraPage,
    MinisterioOver30Page,
    MinisterioSentinelasPage,
    MinisterioPequenosNucleosPage,
    MinisterioNucleoJovemPage,
    MinisterioNucleoEnsinoPage,
    MinisterioLibertacaoPage,
    MinisterioFamiliaPage,
    MinisterioEvangelismoPage,
    MinisterioEstruturaPage,
    MinisterioNucleoKidsPage,
    MinisterioCozinhaPage,
    MinisterioAcaoSocialPage,
    MinisterioTeatroPage,
    MinisterioMultimidiaPage,
    MinisterioLouvorPage,
    MinisterioIntercessaoPage,
    MinisterioDancaPage,
    MinisterioComunicacaoPage,
    MinisterioArtesanatoPage,
    MinisterioCoralPage,
    MinisterioAcolhimentoPage,
    MinisterioApoioPalcoPage,
    ContatoModalPage,
    EquipePastoralDetailPage,
    LoadingSpinnerComponent,
    PequenoNucleoDetailPage,
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
    MinisterioRecepcaoPage,
    MinisterioPalavraPage,
    MinisterioOver30Page,
    MinisterioSentinelasPage,
    MinisterioPequenosNucleosPage,
    MinisterioNucleoJovemPage,
    MinisterioNucleoEnsinoPage,
    MinisterioLibertacaoPage,
    MinisterioFamiliaPage,
    MinisterioEvangelismoPage,
    MinisterioEstruturaPage,
    MinisterioNucleoKidsPage,
    MinisterioCozinhaPage,
    MinisterioAcaoSocialPage,
    MinisterioTeatroPage,
    MinisterioMultimidiaPage,
    MinisterioLouvorPage,
    MinisterioIntercessaoPage,
    MinisterioDancaPage,
    MinisterioComunicacaoPage,
    MinisterioArtesanatoPage,
    MinisterioCoralPage,
    MinisterioAcolhimentoPage,
    MinisterioApoioPalcoPage,
    ContatoModalPage,
    EquipePastoralDetailPage,
    LoadingSpinnerComponent,
    PequenoNucleoDetailPage,
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
    Push
  ]
})
export class AppModule {}
