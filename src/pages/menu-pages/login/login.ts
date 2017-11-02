import { Component, Inject } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../../home/home';
import { Toast } from '@ionic-native/toast';

import { IonicPage, NavController, NavParams, ActionSheetController, Platform, LoadingController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FirebaseApp } from 'angularfire2';

import * as firebase from 'firebase';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	user: User = null;
	FB_APP_ID: number = 1091217954342738;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionSheetCtrl: ActionSheetController,
		public platform: Platform,
		public loadingCtrl: LoadingController,
		public googlePlus: GooglePlus,
		public facebook: Facebook,
		public nativeStorage: NativeStorage,
		@Inject(FirebaseApp) firebaseApp: any,
		private toast: Toast,
		private storage: Storage,
		public events: Events

	) {
		this.user = new User();
	}

	// presentActionSheet() {
	//   let actionSheet = this.actionSheetCtrl.create({
	//     title: 'Ações',
	//     cssClass: 'action-sheets-basic-page',
	//     buttons: [
	//       {
	//         text: 'ACESSAR COM GOOGLE',
	//         icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
	//         handler: () => {
	//           this.doGoogleLogin(this.nativeStorage);
	//         }
	//       },
	//       {
	//         text: 'ACESSAR COM FACEBOOK',
	//         icon: !this.platform.is('ios') ? 'logo-facebook' : null,
	//         handler: () => {
	//           this.doFacebookLogin(this.nativeStorage);
	//         }
	//       },
	//       {
	//         text: 'CRIAR CONTA',
	//         icon: !this.platform.is('ios') ? 'md-create' : null,
	//         handler: () => {
	//           console.log('Favorite clicked');
	//         }
	//       },
	//       {
	//         text: 'CANCEL',
	//         role: 'cancel', // will always sort to be on the bottom
	//         icon: !this.platform.is('ios') ? 'close' : null,
	//         handler: () => {
	//           console.log('Cancel clicked');
	//         }
	//       }
	//     ]
	//   });
	//   actionSheet.present();
	// }

	doGoogleLogin() {

		let nav = this.navCtrl;

		let loading = this.loadingCtrl.create({
			content: 'Aguarde...'
		});

		loading.present();

		this.googlePlus.login({
			'scopes': '',
			'webClientId': '1086236008019-8orpu99bbsuti181ua0tq70tdl5c1879.apps.googleusercontent.com',
			'offline': true
		}).then((user) => {

			loading.dismiss();

			this.user.nome = user.displayName;
			this.user.email = user.email;
			this.user.fotoUrl = user.imageUrl;

			this.nativeStorage.setItem('user', this.user).then(() => {
				nav.setRoot(HomePage);
			}, (error) => {
				this.toast.show(`Ocorreu um erro ao persistir os dados!`, 'short', 'bottom').subscribe(toast => { });
			})

			this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
			this.events.publish('login:changed', this.user);

		}, (error) => {
			this.toast.show(`Error ao logar!`, 'short', 'bottom').subscribe(toast => { });
			loading.dismiss();
		});

	}

	doGoogleLogout() {

		this.googlePlus.logout().then((response) => {
			this.nativeStorage.remove('user');
			this.user = null;
			this.toast.show(`Usuário desconectado!`, 'short', 'bottom').subscribe(toast => { });
		}, (error) => {
			console.log(error);
			this.toast.show(`Erro ao desconectar!`, 'short', 'bottom').subscribe(toast => { });
		})
	}

	doFacebookLogin() {

		let permissions = new Array<string>();
		let nav = this.navCtrl;

		let loading = this.loadingCtrl.create({
			content: 'Aguarde...'
		});

		loading.present();

		permissions = ['public_profile', 'user_friends', 'email'];

		this.facebook.login(permissions).then((response) => {
			console.log("sucesso no login");
			let userId = response.authResponse.userID;
			let params = new Array<string>();

			//Getting name and gender properties
			this.facebook.api("/me?fields=name,gender,email", params).then((user) => {
				loading.dismiss();

				this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });

				this.user.nome = user.name;
				this.user.email = user.email;
				this.user.fotoUrl = "https://graph.facebook.com/" + userId + "/picture?type=large";

				this.events.publish('login:changed', this.user);

				this.nativeStorage.setItem('user', this.user).then(() => {
					nav.setRoot(HomePage);
				}, (error) => {
					this.toast.show(`Ocorreu um erro ao persistir os dados!`, 'short', 'bottom').subscribe(toast => { });
				})
			})
		}, (error) => {
			loading.dismiss();
			this.toast.show(`Erro ao conectar com facebook!`, 'short', 'bottom').subscribe(toast => { });
		});
	}

	doFacebookLogout() {
		var nav = this.navCtrl;
		this.facebook.logout()
			.then((response) => {
				//user logged out so we will remove him from the NativeStorage
				this.nativeStorage.remove('user');
				this.user = null;
				this.toast.show(`Usuário desconectado!`, 'short', 'bottom').subscribe(toast => { });
				// nav.push(LoginPage);
			}, (error) => {
				console.log(error);
				this.toast.show(`Erro ao desconectar!`, 'short', 'bottom').subscribe(toast => { });
			});
	}
}

export class User {
	nome: string;
	email: string;
	fotoUrl: string;
}
