import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
    user: any;
    perfilForm: FormGroup;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public auth: AuthServiceProvider,
      public formBuilder: FormBuilder
  ) {

  }

  enviar() {

  }
}
