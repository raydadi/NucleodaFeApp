import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  selector: 'page-pequeno-nucleo-popover',
  templateUrl: 'pequeno-nucleo-popover.html',
})
export class PequenoNucleoPopoverPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public zone: NgZone,
              public alertCtrl: AlertController) {

  }

  showTipos() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Tipo de Célula');

    alert.addInput({
      type: 'radio',
      label: 'Homens',
      value: 'homens',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Mulheres',
      value: 'mulheres',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Jovens',
      value: 'jovens',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Casais',
      value: 'casais',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Adolescentes',
      value: 'adolescentes',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'OK',
      handler: data => {

      }
    });
    alert.present();
  }

  showDias(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Dia da Semana');

    alert.addInput({
      type: 'checkbox',
      label: 'Segunda',
      value: 'segunda',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Terça',
      value: 'terca'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Quarta',
      value: 'quarta'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Quinta',
      value: 'quinta'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sexta',
      value: 'sexta'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sábado',
      value: 'sabado'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Domingo',
      value: 'domingo'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data => {

      }
    });
    alert.present();
  }
}
