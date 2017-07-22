import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    testemunhoForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public db: AngularFireDatabase, public formBuilder: FormBuilder) {
      this.testemunhos = db.list("/testemunhos");
      this.testemunhoForm = formBuilder.group({
        'nome': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
        'telefone': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
        'email': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40)])],
        'testemunho': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(400)])]
      })
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
