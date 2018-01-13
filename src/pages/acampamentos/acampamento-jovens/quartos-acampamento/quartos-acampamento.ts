import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject'
import { AcampantesProvider } from "../../../../providers/acampantes/acampantes";
import { QuartoDetailPage } from "./quarto-detail/quarto-detail";

@IonicPage()
@Component({
  selector: 'page-quartos-acampamento',
  templateUrl: 'quartos-acampamento.html',
})
export class QuartosAcampamentoPage {

  acampantes;
  startAt = new Subject()
  endAt = new Subject()

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private acampSvc: AcampantesProvider,
      public modalCtrl: ModalController
  ) {
  }

  ionViewWillEnter() {
    this.acampSvc.getAcampantes(this.startAt, this.endAt).subscribe(acampantes => {
        this.acampantes = acampantes
    });
  }

  mostraAcampante(acampante) {
      let modal = this.modalCtrl.create(QuartoDetailPage, {data: acampante});
      modal.present();
  }

  getItems($event) {
      let q = $event.target.value;
      this.startAt.next(q);
      this.endAt.next(q+"\uf8ff");
    // if ($event.timeStamp - $event.lastKeypress > 200) {
    //   let q = $event.target.value
    //   console.log("Tecla = ", q);
    //   this.startAt.next(q)
    //   this.endAt.next(q + "\uf8ff");
    // }
    // $event.lastKeypress = $event.timeStamp;
  }
}
