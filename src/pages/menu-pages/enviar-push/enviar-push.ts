import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, Platform, LoadingController, Loading, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PushGalleryPage } from "./push-gallery/push-gallery";


// https://devdactic.com/ionic-2-images/

//declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-enviar-push',
  templateUrl: 'enviar-push.html',
})
export class EnviarPushPage {
    push: Push;
    enviarPushForm: FormGroup;
    pushs: FirebaseListObservable<any>;
    lastImage: string = null;
    loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public db: AngularFireDatabase,
              public modalCtrl: ModalController,
              // private toast: Toast,
              // private camera: Camera,
              // private file: File,
              // private filePath: FilePath,
              // public actionSheetCtrl: ActionSheetController,
              public platform: Platform,
              public loadingCtrl: LoadingController){
      this.enviarPushForm = formBuilder.group({
        'titulo': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
        'resumo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])],
        'msg': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(500)])],
        'img': [null]
      })
      this.push = new Push();
      this.pushs = db.list("/push");

  }

  escolherImagem() {
      let modal = this.modalCtrl.create(PushGalleryPage);
      modal.present();
  }

  enviar() {
    this.pushs.push(this.push);
    // this.upload()
    //
    // this.toast.show(`Logado com sucesso!`, 'short', 'bottom').subscribe(toast => { });
    // this.enviarPushForm.reset()
  }

  // public presentActionSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Selecione uma fonte de imagem',
  //     buttons: [
  //       {
  //         text: 'Carregar da galeria',
  //         handler: () => {
  //           this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       },
  //       {
  //         text: 'Usar Camera',
  //         handler: () => {
  //           this.takePicture(this.camera.PictureSourceType.CAMERA);
  //         }
  //       },
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  // public takePicture(sourceType) {
  // Create options for the Camera Dialog

  // const cameraOptions: CameraOptions = {
  //     quality: 50,
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     encodingType: Camera.EncodingType.JPEG,
  //     mediaType: Camera.MediaType.PICTURE,
  //   };

  // var options = {
  //   quality: 50,
  //   sourceType: sourceType,
  //   saveToPhotoAlbum: false,
  //   correctOrientation: true
  // };

  // Get the data of an image
  // this.camera.getPicture(options).then((imagePath) => {
  //   // Special handling for Android library
  //   if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
  //     this.filePath.resolveNativePath(imagePath)
  //       .then(filePath => {
  //         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
  //         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
  //
  //         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //       });
  //   } else {
  //     var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
  //     var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
  //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //   }
  // }, (err) => {
  //   this.presentToast('Erro enquanto selecionava imagem.');
  // });

  // }

  // Create a new name for the image
// private createFileName() {
//   var d = new Date(),
//   n = d.getTime(),
//   newFileName =  n + ".jpg";
//   return newFileName;
// }
//
// // Copy the image to a local folder
// private copyFileToLocalDir(namePath, currentName, newFileName) {
//   this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
//     //this.lastImage = newFileName;
//     this.push.img = newFileName;
//   }, error => {
//     this.presentToast('Erro enquanto armazenando arquivo.');
//   });
// }
//
// private presentToast(text) {
//   this.toast.show(text, 'short', 'bottom').subscribe(toast => { });
// }
//
// // Always get the accurate path to your apps folder
// public pathForImage(img) {
//   if (img === null) {
//     return '';
//   } else {
//     return cordova.file.dataDirectory + img;
//   }
// }
//
// upload(){
//   let storageRef = firebase.storage().ref();
//     // Create a timestamp as filename
//     const filename = Math.floor(Date.now() / 1000);
//
//     // Create a reference to 'images/todays-date.jpg'
//     const imageRef = storageRef.child(`push/${filename}.jpg`);
//
//     imageRef.putString(this.push.img, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
//      // Do something here when the data is succesfully uploaded!
//     });
// }

}

export class Push {
  titulo: string;
  resumo: string;
  msg: string;
  img: string;
}
