import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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

    testemunhos: FirebaseListObservable<any>;
    testemunho: {nome: string, telefone: string, email: string, testemunho: string, publico: boolean} = {nome: '', telefone: '', email: '', testemunho: '', publico: false};


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public db: AngularFireDatabase) {
      this.testemunhos = db.list("/testemunhos");
  }

  enviar() {
    let confirm = this.alertCtrl.create({
      title: 'TESTEMUNHO PÚBLICO?',
      message: 'O seu testemunho pode ser visualizado por outras pessoas?',
      buttons: [
        {
          text: 'NÃO',
          handler: () => {
            this.testemunho.publico = false;
          }
        },
        {
          text: 'SIM',
          handler: () => {
            this.testemunho.publico = true;
          }
        }
      ]
    });
    confirm.present();

    this.testemunhos.push(this.testemunho);
  }

}
