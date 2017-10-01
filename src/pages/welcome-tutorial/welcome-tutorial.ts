import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the WelcomeTutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome-tutorial',
  templateUrl: 'welcome-tutorial.html',
})
export class WelcomeTutorialPage {

  slides = [
    {
      title: "Pequeno Núcleo!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/ministerios/acolhimento.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/ministerios/acolhimento.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/ministerios/acolhimento.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeTutorialPage');
  }

  skip() {
    this.nativeStorage.setItem('welcome', {}).then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
    this.navCtrl.setRoot(HomePage);
  }
}
