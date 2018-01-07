import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast } from '@ionic-native/toast';

@IonicPage()
@Component({
  selector: 'page-enquete',
  templateUrl: 'enquete.html'
})
export class EnquetePage {

    enquetes: FirebaseListObservable<any>;
    enquete: Enquete;
    enqueteForm: FormGroup;
    showViewButton: boolean = false;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public db: AngularFireDatabase,
      public formBuilder: FormBuilder,
      private toast: Toast
  ) {
      this.enquetes = db.list("/enquetes");
      this.enquete = new Enquete();
      this.enquete.id = this.generateUID();

      this.enqueteForm = formBuilder.group({
        'pergunta': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
        'opcao1': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
        'opcao2': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
        'opcao3': [null, Validators.compose([Validators.minLength(2), Validators.maxLength(20)])],
        'opcao4': [null, Validators.compose([Validators.minLength(2), Validators.maxLength(20)])],
        'opcao5': [null, Validators.compose([Validators.minLength(2), Validators.maxLength(20)])]
      })
  }

  enviar() {
      let newKey = this.enquetes.push(this.enquete).key;
      //this.toast.show(`Enquete criada com sucesso!`, 'short', 'bottom').subscribe(toast => {});
      //this.enqueteForm.reset();

      this.showViewButton = true;
  }

  generateUID() {
    return (Date.now().toString(36) + Math.random().toString(36)).substr(1, 5).toLowerCase();
  }

  showEnqueteResults() {

  }
}

export class Enquete {
  id: string;
  nome: string;
  tipo: string;
  votos: [{
      idUser: string;
      opcao: string;
  }]
  opcao1: string;
  opcao2: string;
  opcao3: string = "";
  opcao4: string = "";
  opcao5: string = "";
}
