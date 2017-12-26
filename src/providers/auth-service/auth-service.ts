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


@Injectable()
export class AuthServiceProvider {
  FB_APP_ID: number = 1091217954342738;
  usersFirebase: FirebaseListObservable<any>;
  userFirebase: FirebaseListObservable<any>;
  currentUser: User;

  constructor(
      public googlePlus: GooglePlus,
      public facebook: Facebook,
      public nativeStorage: NativeStorage,
      private toast: Toast,
      private storage: Storage,
      public db: AngularFireDatabase
  ) {
      this.usersFirebase = db.list("/users");
  }

  doGoogleLogin() {
    this.googlePlus.login({
      'scopes': '',
      'webClientId': '1086236008019-8orpu99bbsuti181ua0tq70tdl5c1879.apps.googleusercontent.com',
      'offline': true
  }).then((userGoogle) => { // Logado no Google com sucesso!
      this.currentUser = new User();

      const firecreds = firebase.auth.GoogleAuthProvider.credential(userGoogle.idToken);

      firebase.auth().signInWithCredential(firecreds).then((res) => { // Logado no Firebase com sucesso

        // this.userFirebase = this.getUserById(this.currentUser.id);
        this.userFirebase = this.getUserRefByEmail(userGoogle.email);

        this.userFirebase.subscribe(data => {

            console.log("Usuario recuperado do banco: ", data);

            // Se existe usuario
              if(data.length > 0) {
                this.usersFirebase.update(data[0].$key, this.currentUser);
                console.log("Usuario já existe. Atualizando...", this.userFirebase);
              }
              // Se não existe, cria um novo
              else {
                  this.currentUser.nome = userGoogle.displayName;
                  this.currentUser.email = userGoogle.email;
                  this.currentUser.fotoUrl = userGoogle.imageUrl;
                  this.currentUser.id = userGoogle.idToken;
                  this.currentUser.deviceToken = this.getDeviceToken();

                  console.log("Usuario não existe. Criando novo", this.currentUser);

                  this.usersFirebase.push(this.currentUser);
              }
        });

        this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });

      }).catch((err) => {
        console.log('Autenticação falhou: ' + err);
        this.toast.show(`Error ao logar!`, 'short', 'bottom').subscribe(toast => { });
      })

    }, (error) => {
      console.log('Autenticação falhou 2: ' + error);
      this.toast.show(`Error ao logar!`, 'short', 'bottom').subscribe(toast => { });
    });
  }

  logout() {

      this.googlePlus.logout().then((response) => {
          this.toast.show(`Desconectado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
      }, function (error) {
          console.log(error);
      })

      this.facebook.logout().then((response) => {
          this.toast.show(`Desconectado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
      }, (error) => {
          console.log(error);
      })

      firebase.auth().signOut();

      this.currentUser = null;
  }

  getDeviceToken(): any {
      this.nativeStorage.getItem('device_token').then((data) => {
        return data;
      }, (error) => {
        alert('Erro ao conseguir device token' + error);
      });
      return null;
  }

  getUserRefByEmail(email: any): any {
      return this.db.list("/users", {
        query: {
          orderByChild: 'email',
          equalTo: email
        }
    });
  }



  // userExist(usersRef: FirebaseListObservable<any>): any {
  //     usersRef.subscribe(data => {
  //         // Se já existe usuario, atualiza os dados
  //         return data.length > 0
  //     });
  // }
}

export class User {
  id: string;
  nome: string;
  email: string;
  fotoUrl: string;
  deviceToken: string;
  roles: Array<string> = ["anonimo"];
}
