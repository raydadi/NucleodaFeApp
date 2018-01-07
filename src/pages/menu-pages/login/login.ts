import { Component } from '@angular/core';
// import { GooglePlus } from '@ionic-native/google-plus';
// import { NativeStorage } from '@ionic-native/native-storage';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../../home/home';
// import { Toast } from '@ionic-native/toast';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { IonicPage, NavController } from 'ionic-angular';
// import { Storage } from '@ionic/storage';

import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';

// import { FirebaseApp } from 'angularfire2';
// import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // user: User = null;
  // FB_APP_ID: number = 1091217954342738;
  // usersFire: FirebaseListObservable<any>;
  // userFire: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams,
    // public actionSheetCtrl: ActionSheetController,
    // public platform: Platform,
    // public loadingCtrl: LoadingController,
    // public googlePlus: GooglePlus,
    // public facebook: Facebook,
    // public nativeStorage: NativeStorage,
    // @Inject(FirebaseApp) firebaseApp: any,
    // private toast: Toast,
    // private storage: Storage,
    // public events: Events,
    // public db: AngularFireDatabase,
    public authProvider: AuthServiceProvider
  ) {
    // this.user = new User();
    // this.usersFire = db.list("/users");
  }

  doGoogleLogin() {
      this.authProvider.doGoogleLogin().then(result=>{
          if(result)
            this.navCtrl.setRoot(HomePage);
      });
  }

  doFacebookLogin() {
      this.authProvider.doFacebookLogin().then(result=>{
          if(result)
            this.navCtrl.setRoot(HomePage);
      });
  }

  // doGoogleLogin() {
  //
  //   let nav = this.navCtrl;
  //
  //   let loading = this.loadingCtrl.create({
  //     content: 'Aguarde...'
  //   });
  //
  //   loading.present();
  //
  //   this.googlePlus.login({
  //     'scopes': '',
  //     'webClientId': '1086236008019-8orpu99bbsuti181ua0tq70tdl5c1879.apps.googleusercontent.com',
  //     'offline': true
  // }).then((userGoogle) => { // Logado no Google com sucesso!
  //
  //     const firecreds = firebase.auth.GoogleAuthProvider.credential(userGoogle.idToken);
  //
  //     firebase.auth().signInWithCredential(firecreds).then((res) => { // Logado no Firebase com sucesso
  //
  //       this.user.nome = userGoogle.displayName;
  //       this.user.email = userGoogle.email;
  //       this.user.fotoUrl = userGoogle.imageUrl;
  //       this.user.id = userGoogle.idToken;
  //
  //       this.nativeStorage.getItem('device_token').then((data) => {
  //         this.user.deviceToken = data;
  //       }, (error) => {
  //         alert('Erro ao conseguir device token' + error);
  //       });
  //
  //       this.nativeStorage.setItem('user', this.user).then(() => {
  //         nav.setRoot(HomePage);
  //
  //         this.userFire = this.db.list("/users", {
  //           query: {
  //             orderByChild: 'id',
  //             equalTo: this.user.id
  //           }
  //         });
  //
	// 	  this.userFire.subscribe(data => {
  //
  //             // Se já existe usuario, atualiza os dados
  //             if (data.length > 0) {
  //               console.log("Usuario já existe: ",data);
  //               //this.usersFire.update(data.$key,data);
  //             }
  //             else {
  //               this.usersFire.push(this.user);
  //             }
  //             this.events.publish('login:changed', this.user);
  //         });
  //
  //         this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
  //         this.events.publish('login:changed', this.user);
  //
  //       }, (error) => {
  //         this.toast.show(`Ocorreu um erro ao persistir os dados!`, 'short', 'bottom').subscribe(toast => { });
  //       })
  //
  //     }).catch((err) => {
  //       alert('Autenticação falhou: ' + err);
  //       //this.toast.show(`Error ao logar!`, 'short', 'bottom').subscribe(toast => { });
  //     })
  //
  //     loading.dismiss();
  //
  //   }, (error) => {
  //     loading.dismiss();
  //     this.toast.show(`Error ao logar-se com Google!`, 'short', 'center').subscribe(toast => { });
  //     console.log(error);
  //   });
  //
  // }

  // doFacebookLogin() {

  //   let permissions = new Array<string>();
  //   let nav = this.navCtrl;
  //
  //   let loading = this.loadingCtrl.create({
  //     content: 'Aguarde...'
  //   });
  //
  //   loading.present();
  //
  //   permissions = [
  //     'public_profile',
  //     'user_friends',
  //     'email'
  //     // 'user_about_me',
  //     // 'user_birthday',
  //     // 'user_location',
  //     // 'user_education_history',
  //     // 'user_hometown',
  //     // 'user_relationship_details',
  //     // 'user_relationships',
  //     // 'user_religion_politics',
  //     // 'user_work_history'
  //   ];
  //
  //   this.facebook.login(permissions).then((response) => {
  //
  //     let userId = response.authResponse.userID;
  //     let params = new Array<string>();
  //     let accessToken = response.authResponse.accessToken;
  //
  //     //Getting name and gender properties
  //     this.facebook.api("/me?fields=name,gender,email", params).then((user) => {
  //
  //       const firecreds = firebase.auth.FacebookAuthProvider.credential(accessToken);
  //
  //       firebase.auth().signInWithCredential(firecreds).then((res) => {
  //
  //         this.user.nome = user.name;
  //         this.user.email = user.email;
  //         this.user.fotoUrl = "https://graph.facebook.com/" + userId + "/picture?type=large";
  //         this.user.id = userId;
  //
  //         this.nativeStorage.getItem('device_token').then((data) => {
  //           this.user.deviceToken = data;
  //         }, (error) => {
  //           alert('Erro ao conseguir device token' + error);
  //         });
  //
  //         this.nativeStorage.setItem('user', this.user).then(() => {
  //           nav.setRoot(HomePage);
  //
  //           this.userFire = this.db.list("/users", {
  //             query: {
  //               orderByChild: 'id',
  //               equalTo: this.user.id
  //             }
  //           });
  //
  //           this.userFire.subscribe(data => {
  //               // Se já existe usuario
  //               if (data.length > 0) {
  //                 console.log("Usuario já existe: ",data);
  //               }
  //               else {
  //                 this.usersFire.push(this.user);
  //               }
  //           });
  //
  //           this.events.publish('login:changed', this.user);
  //           this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
  //
  //         }, (error) => {
  //           this.toast.show(`Ocorreu um erro ao persistir os dados!`, 'short', 'bottom').subscribe(toast => { });
  //         })
  //
  //       }).catch((err) => {
  //
  //         if(err.message.indexOf('An account already exists') >= 0) {
  //             console.log(err);
  //             // firebase.auth()
  //             //    .link(credential)
  //             //    .then((user) => {
  //             //      console.log("Anonymous account successfully upgraded", user);
  //             //    })
  //             //    .catch((error) => {
  //             //      console.log("Error upgrading anonymous account", error);
  //             //    });
  //         }
  //         else {
  //             //    .currentUser
  //             alert('Autenticação falhou:' + err);
  //             console.log(err);
  //         }
  //         //this.toast.show(`Erro ao conectar com facebook!`, 'short', 'bottom').subscribe(toast => { });
  //       })
  //     })
  //
  //     loading.dismiss();
  //
  //   }, (error) => {
  //     loading.dismiss();
  //     console.log(error);
  //     this.toast.show(`Erro ao conectar com facebook!`, 'short', 'bottom').subscribe(toast => { });
  //   });
  // }
}

// export class User {
//   id: string;
//   nome: string;
//   email: string;
//   fotoUrl: string;
//   deviceToken: string;
//   roles: Array<string> = ["anonimo"];
// }
