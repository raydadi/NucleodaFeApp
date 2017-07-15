import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../../home/home';

import { IonicPage, NavController, NavParams, ActionSheetController, Platform, LoadingController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    user = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public googlePlus: GooglePlus,
    public nativeStorage: NativeStorage
  ) {
    this.nativeStorage.getItem('user')
    .then((data) => {
          this.user = data;
      }, (error) => {

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ações',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'ACESSAR COM GOOGLE',
          icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
          handler: () => {
            this.doGoogleLogin(this.nativeStorage);
          }
        },
        {
          text: 'ACESSAR COM FACEBOOK',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            this.doFacebookLogin(this.nativeStorage);
          }
        },
        {
          text: 'CRIAR CONTA',
          icon: !this.platform.is('ios') ? 'md-create' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'CANCEL',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

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
    }).then(function(user) {
      loading.dismiss();
      nativeStorage.setItem('user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      }).then(function() {
        nav.setRoot(HomePage);
      }, function(error) {
        console.log(error);
      })
    }, function(error) {
      console.log(error);
      loading.dismiss();
    });
  }

  doGoogleLogout() {
    let nav = this.navCtrl;
    this.googlePlus.logout()
      .then((response) => {
        this.nativeStorage.remove('user');
        this.user = null;
        //nav.push(LoginPage);
      }, function(error) {
        console.log(error);
      })
  }

  doFacebookLogin(nativeStorage: NativeStorage) {

  }

  doFacebookLogout() {

  }

}
