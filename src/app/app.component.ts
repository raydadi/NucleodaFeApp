import { AngularFireModule } from 'angularfire2';
import { Component, ViewChild } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

import { Platform, MenuController, Nav, App } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/menu-pages/login/login';
import { SobrePage } from '../pages/menu-pages/sobre/sobre';
import { EquipePastoralPage } from '../pages/menu-pages/equipe-pastoral/equipe-pastoral';
import { ComoChegarPage } from '../pages/menu-pages/como-chegar/como-chegar';
import { ComoContribuirPage } from '../pages/menu-pages/como-contribuir/como-contribuir';
import { FaleConoscoPage } from '../pages/menu-pages/fale-conosco/fale-conosco';
import { WelcomeTutorialPage } from '../pages/welcome-tutorial/welcome-tutorial';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private nativeStorage: NativeStorage,
    public app: App,
    public googlePlus: GooglePlus
  ) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Sobre', component: SobrePage },
      { title: 'Equipe Pastoral', component: EquipePastoralPage },
      { title: 'Como Chegar', component: ComoChegarPage },
      { title: 'Como Contribuir', component: ComoContribuirPage },
      { title: 'Fale Conosco', component: FaleConoscoPage }
    ];
  }

  initializeApp() {
    let env = this;

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      if (env.platform.is('cordova')) {
        env.googlePlus.trySilentLogin({
          'scopes': '',
          'webClientId': '1086236008019-8orpu99bbsuti181ua0tq70tdl5c1879.apps.googleusercontent.com',
          'offline': true
      }).then((user) => {
          env.nativeStorage.setItem('user', {
            name: user.displayName,
            email: user.email,
            picture: user.imageUrl
          }).then(() => {
            console.log("sucesso");
          }, (error) => {
            console.log(error);
          })
        }, (error) => {
          console.log(error);
        });
      }

      env.changeRootPage(env.nativeStorage, env.app);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeRootPage(nativeStorage: NativeStorage, app: App) {
    nativeStorage.getItem('welcome')
      .then((data) => {
        app.getRootNav().setRoot(HomePage);
    }, (error) => {
        app.getRootNav().setRoot(WelcomeTutorialPage);
      });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
  }

  // navigatePageSobre() {
  //     this.menu.close();
  //     this.navCtrl.push(SobrePage);
  // }
}
