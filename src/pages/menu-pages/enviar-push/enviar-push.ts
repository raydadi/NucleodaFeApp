import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-enviar-push',
  templateUrl: 'enviar-push.html',
})
export class EnviarPushPage {
    push: Push;
    enviarPushForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,) {
      this.enviarPushForm = formBuilder.group({
        'titulo': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
        'resumo': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
        'msg': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(40)])],
        'img': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(400)])]
      })
      this.push = new Push();
  }

}

export class Push {
  titulo: string;
  resumo: string;
  msg: string;
  img: string;
}
