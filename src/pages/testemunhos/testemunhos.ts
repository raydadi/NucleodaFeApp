import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TestemunhosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-testemunhos',
  templateUrl: 'testemunhos.html',
})
export class TestemunhosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestemunhosPage');
  }

  enviar() {
    let confirm = this.alertCtrl.create({
      title: 'TESTEMUNHO PÚBLICO?',
      message: 'O seu testemunho pode ser visualizado por outras pessoas?',
      buttons: [
        {
          text: 'DISCORDO',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'CONCORDO',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
