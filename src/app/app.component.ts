import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage = HelloIonicPage;
  rootPage = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Sobre', component: SobrePage },
      { title: 'Equipe Pastoral', component: EquipePastoralPage },
      { title: 'Como Chegar', component: ComoChegarPage },
      { title: 'Como Contribuir', component: ComoContribuirPage },
      { title: 'Fale Conosco', component: FaleConoscoPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  // navigatePageSobre() {
  //     this.menu.close();
  //     this.navCtrl.push(SobrePage);
  // }
}
