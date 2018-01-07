import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-testemunhos',
  templateUrl: 'testemunhos.html',
})
export class TestemunhosPage {

    testemunhos: FirebaseListObservable<any>;
    testemunho: Testemunho;
    testemunhoForm: FormGroup;
    masks: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public alertCtrl: AlertController,
      public db: AngularFireDatabase,
      public formBuilder: FormBuilder,
      private toast: Toast
  ) {
      this.testemunhos = db.list("/testemunhos");
      this.testemunho = new Testemunho();
      this.testemunhoForm = formBuilder.group({
        'nome': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
        'telefone': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
        'email': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40)])],
        'testemunho': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(400)])]
      })

      this.masks = {
            phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
  }

  enviar() {
    let confirm = this.alertCtrl.create({
      title: 'TESTEMUNHO',
      message: 'O seu testemunho será publicado em nosso site! Confirma o envio?',
      buttons: [
        {
          text: 'NÃO',
          cssClass: 'botao-testemunho',
          handler: () => {
              this.toast.show(`Testemunho não enviado!`, 'short', 'bottom').subscribe(toast => {

              });
          }
        },
        {
          text: 'SIM',
          cssClass: 'botao-testemunho',
          handler: () => {
            this.testemunhos.push(this.testemunho);
            this.clear();
            this.toast.show(`Testemunho enviado com sucesso!`, 'short', 'bottom').subscribe(toast => {});
          }
        }
      ]
    });
    confirm.present();
  }

  clear() {
      this.testemunhoForm.reset()
  }
}

export class Testemunho {
  nome: string;
  telefone: string;
  email: string;
  testemunho: string;
}
