import { Component, Inject } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../../home/home';
import { Toast } from '@ionic-native/toast';

import { IonicPage, NavController, NavParams, ActionSheetController, Platform, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FirebaseApp } from 'angularfire2';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = null;
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
    private storage: Storage

  ) {
    //this.facebook.browserInit(this.FB_APP_ID, "v2.8");
    this.nativeStorage.getItem('user')
      .then((data) => {
        this.user = data;
      }, (error) => {

      });

    //   this.storage.get('user').then((val) => {
    //       this.user = val;
    //   });
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

  doGoogleLogin(nativeStorage: NativeStorage) {

    let nav = this.navCtrl;

    let loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loading.present();

    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '1086236008019-8orpu99bbsuti181ua0tq70tdl5c1879.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
  }).then((user) => {

        loading.dismiss();
    //   const firecreds = this.firebaseApp.auth.GoogleAuthProvider.credential(user.idToken);
    //   this.firebaseApp.auth().signInWithCredential(firecreds)
    //   .then((res) => {
      //
    //
      //
    //   }).catch((err) => {
    //     alert('Firebase auth failed' + err);
    //     console.log(err);
    //   })

    this.nativeStorage.setItem('user', {
      name: user.displayName,
      email: user.email,
      picture: user.imageUrl
    }).then(function() {
      nav.setRoot(HomePage);
    }, function(error) {
      console.log(error);
    })



    // this.storage.get('user',{
    //     name: user.displayName,
    //     email: user.email,
    //     picture: user.imageUrl
    // }).then(function() {
    //     nav.setRoot(HomePage);
    //   }, function(error) {
    //     console.log(error);
    // });

      this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => {

      });

    }, function(error) {
        this.toast.show(`Error ao logar!`, 'short', 'bottom').subscribe(toast => {

        });
      console.log(error);
      alert('Error' + error);
      loading.dismiss();
    });



  }

  doGoogleLogout() {

    this.googlePlus.logout()
      .then((response) => {
        this.nativeStorage.remove('user');
        this.user = null;
        this.toast.show(`Usuário desconectado!`, 'short', 'bottom').subscribe(toast => {

        });
      }, function(error) {
        console.log(error);
        this.toast.show(`Erro ao logout!`, 'short', 'bottom').subscribe(toast => {

        });
      })
  }

  doFacebookLogin(nativeStorage: NativeStorage) {

    let permissions = new Array<string>();
    let nav = this.navCtrl;
    //the permissions your facebook app needs from the user
    permissions = ['public_profile', 'user_friends', 'email'];

    this.facebook.login(permissions)
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));

    // this.facebook.login(['email']).then( (response) => {
    //     console.log("sucesso");
    //     console.log(response);
    //
    // }).catch((error) => { console.log(error) });

    // this.facebook.login(permissions)
    //   .then(function(response) {
    //       console.log("sucesso no login");
    //     let userId = response.authResponse.userID;
    //     let params = new Array<string>();
    //
    //     //Getting name and gender properties
    //     this.facebook.api("/me?fields=name,gender", params)
    //       .then(function(user) {
    //           console.log("Logado. User:");
    //           console.log(user);
    //         user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
    //         //now we have the users info, let's save it in the NativeStorage
    //         nativeStorage.setItem('user',
    //           {
    //             name: user.name,
    //             gender: user.gender,
    //             picture: user.picture
    //           })
    //           .then(function() {
    //             nav.setRoot(HomePage);
    //           }, function(error) {
    //               console.log("Error");
    //             console.log(error);
    //           })
    //       })
    //   }, function(error) {
    //       console.log("Error2");
    //     console.log(error);
    //     loading.dismiss();
    //   });
  }

  doFacebookLogout() {
    var nav = this.navCtrl;
    this.facebook.logout()
      .then(function(response) {
        //user logged out so we will remove him from the NativeStorage
        this.nativeStorage.remove('user');
        this.user = null;
        // nav.push(LoginPage);
      }, function(error) {
        console.log(error);
      });
  }

}
