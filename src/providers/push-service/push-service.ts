import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class PushServiceProvider {

  constructor(
      private push: Push,
      private nativeStorage: NativeStorage
  ) {
      
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
          this.nativeStorage.setItem('device_token', registration.registrationId).then(() => {
              console.log("Token salvo com sucesso!");
          }, (error) => {
              console.log("Erro ao salvar tokne",error);
          })

          pushObject.subscribe("All").then((res:any) => {
              console.log("subscribed to topic: ", res);
          });
      });

      pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }

}
