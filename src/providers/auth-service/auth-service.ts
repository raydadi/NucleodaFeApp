import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Toast } from '@ionic-native/toast';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController } from 'ionic-angular';

@Injectable()
export class AuthServiceProvider {
  FB_APP_ID: number = 1091217954342738;
  usersFirebase: FirebaseListObservable<any>;
  userFirebase: FirebaseListObservable<any>;
  user: User = null;

  constructor(
    public googlePlus: GooglePlus,
    public facebook: Facebook,
    public nativeStorage: NativeStorage,
    private toast: Toast,
    private storage: Storage,
    public db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {
    this.usersFirebase = db.list("/users");
    console.log("Construindo AuthService...");
  }

  /*
  ** Login com Google
   */
  async doGoogleLogin() {

    let firecreds;

    let loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loading.present();

    // Loga no serviço do google
    await this.googlePlus.login({
      'scopes': '',
      'webClientId': '1086236008019-8orpu99bbsuti181ua0tq70tdl5c1879.apps.googleusercontent.com',
      'offline': true
    }).then((userGoogle) => { // Logado no Google com sucesso!
      this.user = new User();

      firecreds = firebase.auth.GoogleAuthProvider.credential(userGoogle.idToken);

      this.user.nome = userGoogle.displayName;
      this.user.email = userGoogle.email;
      this.user.fotoUrl = userGoogle.imageUrl;
      this.user.id = userGoogle.idToken;

    }, (error) => {
      console.log('Autenticação falhou: ' + error);
      loading.dismiss();
      this.toast.show(`Error ao logar!`, 'short', 'bottom').subscribe(toast => { });
      return false;
    });

    // Pega os dados do device_token
    await this.nativeStorage.getItem('device_token').then((token) => { // Pega device token
      this.user.deviceToken = token;
    }, (error) => {
      console.log('Erro ao conseguir device token' + error);
    });

    // Loga no firebase
    await firebase.auth().signInWithCredential(firecreds).then((res) => { // Logado no Firebase com sucesso

      this.userFirebase = this.getUserRefByEmail(this.user.email);

      this.userFirebase.subscribe(data => {

        console.log("Usuario recuperado do banco: ", data);

        this.user.firebaseId = res.uid;
        if (data[0] != null)
          this.user.roles = data[0].roles;

        // Se existe usuario
        if (data.length > 0) {
          console.log("Usuario já existe. Atualizando...", this.userFirebase);
          this.usersFirebase.update(data[0].$key, this.user);
        }
        // Se não existe, cria um novo
        else {
          console.log("Usuario não existe. Criando novo", this.user);
          this.usersFirebase.push(this.user);
        }

        this.saveUserStorage(this.user).then(() => {});
      });

    }).catch((err) => {

        if (err.message.indexOf('An account already exists') >= 0) {

        console.log("Conta já existe", err);
        // this.loading.hideLoading();
        let alert = this.alertCtrl.create({
          title: 'CONTA DUPLICADA!',
          subTitle: 'Já existe uma conta do Facebook criada. Por favor, faça seu login utilizando o Facebook',
          cssClass: 'font-align: center',
          buttons: [{
            text: 'OK',
            cssClass: 'button-center',
            handler: () => { }
          }]
        });
        alert.present();

        return false;
        //firebase.auth().currentUser.linkWithCredential(firecreds);
        //this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
      }
      else {
        console.log('Autenticação falhou:' + err);
        this.toast.show(`Erro ao logar`, 'short', 'bottom').subscribe(toast => { });
        return false;
      }
    })

    this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
    loading.dismiss();

    return true;
  }

  /*
  ** FACEBOOK LOGIN
  */
  async doFacebookLogin() {

    let loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loading.present();

    this.user = new User();
    let params = new Array<string>();
    let firecreds;
    let userId;

    let permissions = [
      'public_profile',
      'user_friends',
      'email'
    ];

    // Loga no facebook
    await this.facebook.login(permissions).then((response) => {

      userId = response.authResponse.userID;
      firecreds = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

    }, (error) => {
      loading.dismiss();
      console.log(error);
      this.toast.show(`Erro ao conectar com facebook!`, 'short', 'bottom').subscribe(toast => { });
      return false;
    });

    // Pega os dados do usuario na API do facebook
    await this.facebook.api("/me?fields=name,gender,email", params).then((userFacebook) => {
      this.user.nome = userFacebook.name;
      this.user.email = userFacebook.email;
    })

    // Pega os dados do device_token
    await this.nativeStorage.getItem('device_token').then((token) => {
      this.user.deviceToken = token;
    }, (error) => {
      console.log('Erro ao conseguir device token' + error);
    });

    // Loga no firebase
    await firebase.auth().signInWithCredential(firecreds).then((res) => {
        this.user.firebaseId = res.uid;

        this.userFirebase = this.getUserRefByEmail(this.user.email);

        this.userFirebase.subscribe(data => {

          console.log("Usuario recuperado do banco: ", data);

          this.user.fotoUrl = "https://graph.facebook.com/" + userId + "/picture?type=large";
          this.user.id = userId;

          if (data[0] != null)
            this.user.roles = data[0].roles;

          // Se existe usuario
          if (data.length > 0) {
            console.log("Usuario já existe. Atualizando...", this.userFirebase);
            this.usersFirebase.update(data[0].$key, this.user);
          }
          // Se não existe, cria um novo
          else {
            console.log("Usuario não existe. Criando novo", this.user);
            this.usersFirebase.push(this.user);
          }

          this.saveUserStorage(this.user).then(() => {});
        });
    }).catch((err) => {
      if (err.message.indexOf('An account already exists') >= 0) {
          loading.dismiss();
        console.log("Conta já existe", err);
        // this.loading.hideLoading();

        let alert = this.alertCtrl.create({
          title: 'CONTA DUPLICADA!',
          subTitle: 'Já existe uma conta do Google criada. Por favor, faça seu login utilizando o Google',
          cssClass: 'font-align: center',
          buttons: [{
            text: 'OK',
            cssClass: 'button-center',
            handler: () => { }
          }]
        });
        alert.present();

        return false;

        // firebase.auth().currentUser.linkWithCredential(firecreds);
        // this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
      }
      else {
        console.log('Autenticação falhou:' + err);
        this.toast.show(`Erro ao logar`, 'short', 'bottom').subscribe(toast => { });
        return false;
      }
      //this.toast.show(`Erro ao conectar com facebook!`, 'short', 'bottom').subscribe(toast => { });
    })

    this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
    loading.dismiss();

    return true;
  }

  /*
  ** LOGOUT FROM GOOGLE AND FACEBOOK
   */
  async logout() {

    this.googlePlus.logout().then((response) => {
      console.log("Desconectado com sucesso!")
    }, function(error) {
      console.log(error);
    })

    this.facebook.logout().then((response) => {
      console.log("Desconectado com sucesso!")
    }, (error) => {
      console.log(error);
    })

    this.deleteUserStorage().then(() => {});

    firebase.auth().signOut();
    this.user = null;
  }

  async saveUserStorage(user: User) {
      await this.nativeStorage.setItem('user',user).then(() => {
          console.log("Usuário salvo local com sucesso!")
      },(error) => {
          console.log("Error ao salvar o usuário local", error);
      });
  }

  async LoadUserStorage() {
      await this.nativeStorage.getItem('user').then((user) => {
          console.log("Usuario carregado: ", user);
          this.user = user;
          return user;
      },(error) => {
          console.log("Error ao recuperar usuário local", error);
      });

      return null;
  }

  async deleteUserStorage() {
      await this.nativeStorage.remove('user').then(() => {
          console.log("Usuário removido com sucesso!")
      },(error) => {
          console.log("Error ao remover o usuário local", error);
      });
  }

  getCurrentUser() {
    return this.user;
  }

  getCurrentUserRoles() {
    if (this.user == null)
      return ["anonimo"];
    return this.user.roles;
  }

  userHasRole(role: string): Boolean {
    console.log("Verificando user has role: ", role);

    if (this.user == null) {
      console.log("User null");
      return false;
    }
    else {
      console.log(this.user.roles.indexOf(role));
      console.log("Roles do user: ", this.user.roles);
      return this.user.roles.indexOf(role) >= 0;
    }
  }

  isUserLoggedIn() {
    //console.log("Verificando se usuario está logado...")
    return this.user != null;
  }

  getUserRefByEmail(email: any): any {
    return this.db.list("/users", {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

}

export class User {
  id: string;
  firebaseId: string;
  nome: string;
  email: string;
  fotoUrl: string;
  deviceToken: string;
  roles: Array<string> = ["anonimo"];
}
