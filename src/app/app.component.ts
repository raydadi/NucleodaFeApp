import { AngularFireModule } from 'angularfire2';
import { Component, ViewChild } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

import { Platform, MenuController, Nav, App, Events } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

import { WelcomeVideoPage } from '../pages/welcome-video/welcome-video';
import { LoginPage } from '../pages/menu-pages/login/login';
import { SobrePage } from '../pages/menu-pages/sobre/sobre';
import { EquipePastoralPage } from '../pages/menu-pages/equipe-pastoral/equipe-pastoral';
import { ComoChegarPage } from '../pages/menu-pages/como-chegar/como-chegar';
import { ComoContribuirPage } from '../pages/menu-pages/como-contribuir/como-contribuir';
import { WelcomeTutorialPage } from '../pages/welcome-tutorial/welcome-tutorial';
import { EnviarPushPage } from "../pages/menu-pages/enviar-push/enviar-push";
import { EnquetePage } from "../pages/enquete/enquete";
import { PerfilPage } from "../pages/menu-pages/perfil/perfil";
// import { User } from "../pages/menu-pages/login/login";
import { Toast } from '@ionic-native/toast';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PushServiceProvider } from '../providers/push-service/push-service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	// user: User = null;

	pages: Array<{ title: string, component: any }>;

	constructor(
		public platform: Platform,
		public menu: MenuController,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		private nativeStorage: NativeStorage,
		public app: App,
		public googlePlus: GooglePlus,
		public facebook: Facebook,
		public events: Events,
		private toast: Toast,
		private auth: AuthServiceProvider,
		private push: PushServiceProvider
	) {
		this.initializeApp();
		// set our app's pages
		this.pages = [
			{ title: 'Login', component: LoginPage },
			{ title: 'Sobre', component: SobrePage },
			{ title: 'Equipe Pastoral', component: EquipePastoralPage },
			{ title: 'Como Chegar', component: ComoChegarPage },
			{ title: 'Como Contribuir', component: ComoContribuirPage }
		];
	}

	initializeApp() {
		let env = this;

		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			//
			env.changeRootPage(env.nativeStorage, env.app).then(() => {});
			//env.app.getRootNav().setRoot(HomePage);

			this.statusBar.styleDefault();
			this.splashScreen.hide();
			this.push.pushsetup().then(() => {});
			this.auth.LoadUserStorage().then(() => {});
		});
	}

	async changeRootPage(nativeStorage: NativeStorage, app: App) {
		await nativeStorage.getItem('welcome').then((data) => {
			app.getRootNav().setRoot(WelcomeVideoPage);
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

	openMensagem() {
		this.menu.close();
		this.nav.push(EnviarPushPage);
	}

	openEnquete() {
		this.menu.close();
		this.nav.push(EnquetePage);
	}

	openPerfil() {
		this.menu.close();
		this.nav.push(PerfilPage);
	}

	logout() {
		this.menu.close();
		this.auth.logout().then(() => {
			this.toast.show(`Desconectado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
		});
	}
}
