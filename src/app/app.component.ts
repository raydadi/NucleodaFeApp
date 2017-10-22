import { AngularFireModule } from 'angularfire2';
import { Component, ViewChild } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

import { Platform, MenuController, Nav, App } from 'ionic-angular';

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

import { Push, PushObject, PushOptions } from '@ionic-native/push';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  user = null;

  //rootPage = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private nativeStorage: NativeStorage,
    public app: App,
    public googlePlus: GooglePlus,
    private push: Push
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

    this.nativeStorage.getItem('user')
      .then((data) => {
        this.user = data;
      }, (error) => {

      });
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
          this.user = user;
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
      this.pushsetup();
    });
  }

  pushsetup() {
    const options: PushOptions = {
     android: {},
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {},
     browser: {
       pushServiceURL: 'http://push.api.phonegap.com/v1/push'
     }
    }

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
          alert("Recebi push notification")
        // let youralert = this.alertCtrl.create({
        //   title: 'New Push notification',
        //   message: notification.message
        // });
        // youralert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => {
       //do whatever you want with the registration ID
    });

    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
    
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

  openEquipePastoral() {
    this.menu.close();
    this.nav.push(EquipePastoralPage);
  }

  openComoChegar() {
    this.menu.close();
    this.nav.push(ComoChegarPage);
  }

  openComoContribuir() {
    this.menu.close();
    this.nav.push(ComoContribuirPage);
  }

  openSobre() {
    this.menu.close();
    this.nav.push(SobrePage);
  }

  openLogin() {
    this.menu.close();
    this.nav.push(LoginPage);
  }

  logout() {
    this.menu.close();
    this.googlePlus.logout()
      .then((response) => {
        this.nativeStorage.remove('user');
        this.user = null;
        //nav.push(LoginPage);
      }, function(error) {
        console.log(error);
      })
  }
  // navigatePageSobre() {
  //     this.menu.close();
  //     this.navCtrl.push(SobrePage);
  // }
}
