import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-pn-contato',
  templateUrl: 'pn-contato.html',
})
export class PnContatoPage {
    pequenoNucleo: FirebaseObjectObservable<any>;
    contato: Contato;
    contatoForm: FormGroup;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public db: AngularFireDatabase,
      public formBuilder: FormBuilder,
      public alertCtrl: AlertController
  ) {
      this.pequenoNucleo = db.object("/pequenos-nucleos/" + navParams.get('data').$key);
      this.contato = new Contato();
      this.contatoForm = formBuilder.group({
        'nome': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
        'telefone': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
        'email': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40)])],
        'obs': [null, Validators.compose([Validators.maxLength(400)])]
      })
  }

  enviar() {
      let dados = "";

      this.pequenoNucleo.subscribe(data => {

          if(!data.hasOwnProperty("interessados")) {
            data.interessados = [];
          }
          data.interessados.push(this.contato);
          dados = data;
      });

      this.pequenoNucleo.update(dados);

      this.dismiss();

      let alert = this.alertCtrl.create({
        title: 'ENVIADO COM SUCESSO!',
        subTitle: 'Será um prazer te-lo em nosso ministério. Entraremos em contato!',
        cssClass: 'font-align: center',
        buttons: [{
          text: 'OK',
          cssClass: 'button-center',
          handler: () => { }
        }]
      });
      alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

export class Contato {
  nome: string;
  telefone: string;
  email: string;
  obs: string;
}
