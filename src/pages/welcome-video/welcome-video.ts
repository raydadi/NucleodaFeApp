import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../menu-pages/login/login";

@IonicPage()
@Component({
  selector: 'page-welcome-video',
  templateUrl: 'welcome-video.html',
})
export class WelcomeVideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navToLogin() {
      this.navCtrl.push(LoginPage);
  }

  navToHome() {
      this.navCtrl.setRoot(HomePage);
  }
}
