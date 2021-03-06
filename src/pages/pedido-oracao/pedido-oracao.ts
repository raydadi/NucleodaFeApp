import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { ModalPedidosOracaoPage } from './modal-pedidos-oracao/modal-pedidos-oracao';
import { Toast } from '@ionic-native/toast';
import { ValidateEmail } from '../../validations/email-validation';

@IonicPage()
@Component({
  selector: 'page-pedido-oracao',
  templateUrl: 'pedido-oracao.html',
})
export class PedidoOracaoPage{

  pedidos: FirebaseListObservable<any>;
  pedido: Pedido;
  pedidoOracaoForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public db: AngularFireDatabase,
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private toast: Toast
  ) {
    this.pedidos = db.list("/pedidos-oracao");
    this.pedido = new Pedido();
    this.pedidoOracaoForm = formBuilder.group({
      'nome': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'telefone': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
      'email': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40), ValidateEmail()])],
      'pedido': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(400)])]
    })
  }

  cadastrar() {
    this.pedidos.push(this.pedido).then(() => {
      this.pedido = new Pedido();
    });
  }

  enviar() {
    this.pedidos.push(this.pedido);

    let alert = this.alertCtrl.create({
      title: 'ENVIADO COM SUCESSO!',
      subTitle: 'O seu pedido foi enviado com sucesso! Estaremos orando por você!',
      cssClass: 'font-align: center',
      buttons: [{
        text: 'OK',
        cssClass: 'button-center',
        handler: () => { }
      }]
    });
    alert.present();
    this.pedidoOracaoForm.reset()
  }

  shortText(text: string) {
      console.log(text);
      if(text != null)
        return text.substring(0, 50) + "\u2026";
    return "";
  }

  openModal(pedido: Pedido) {
    let modal = this.modalCtrl.create(ModalPedidosOracaoPage);
    modal.present();
  }
}

export class Pedido {
  nome: string;
  telefone: string;
  email: string;
  pedido: string;
}
