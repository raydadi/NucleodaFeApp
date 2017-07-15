import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { TestemunhosPage } from '../testemunhos/testemunhos';
import { PedidoOracaoPage } from '../pedido-oracao/pedido-oracao';
import { MinisteriosPage } from '../ministerios/ministerios';
import { PopoverNotificationPage } from '../menu-pages/popover-notification/popover-notification';
import { AvisosPage } from '../avisos/avisos';
import { LoginPage } from '../menu-pages/login/login';


@Component({
  template: `
  <ion-list>
<ion-item-sliding (click)="click()">
  <ion-item>
    <ion-avatar item-start>
      <img src="../../assets/ministerios/acolhimento.jpg">
    </ion-avatar>
    <h2>Slimer</h2>
  </ion-item>

  <ion-item-options side="right">
    <button ion-button color="primary">
      <ion-icon name="md-mail-open"></ion-icon>
      Lido
    </button>
    <button ion-button color="danger">
      <ion-icon name="md-trash"></ion-icon>
      Apagar
    </button>
  </ion-item-options>
</ion-item-sliding>
<ion-item-sliding>
  <ion-item>
    <ion-avatar item-start>
      <img src="../../assets/ministerios/acolhimento.jpg">
    </ion-avatar>
    <h2>Slimer</h2>
  </ion-item>
  <ion-item-options side="left">
    <button ion-button color="primary">
      <ion-icon name="text"></ion-icon>
      Text
    </button>
    <button ion-button color="secondary">
      <ion-icon name="call"></ion-icon>
      Call
    </button>
  </ion-item-options>
  <ion-item-options side="right">
    <button ion-button color="primary">
      <ion-icon name="mail"></ion-icon>
      Email
    </button>
  </ion-item-options>
</ion-item-sliding>
<ion-item-sliding>
  <ion-item>
    <ion-avatar item-start>
      <img src="../../assets/ministerios/acolhimento.jpg">
    </ion-avatar>
    <h2>Slimer</h2>
    <p>Teste</p>
  </ion-item>
  <ion-item-options side="left">
    <button ion-button color="primary">
      <ion-icon name="text"></ion-icon>
      Text
    </button>
    <button ion-button color="secondary">
      <ion-icon name="call"></ion-icon>
      Call
    </button>
  </ion-item-options>
  <ion-item-options side="right">
    <button ion-button color="primary">
      <ion-icon name="mail"></ion-icon>
      Email
    </button>
  </ion-item-options>
</ion-item-sliding>
</ion-list>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams, public navCtrl: NavController) {

  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;

      this.background = this.getColorName(this.contentEle.style.backgroundColor);
      this.setFontFamily();
    }
  }

  getColorName(background) {
    let colorName = 'white';

    if (!background) return 'white';

    for (var key in this.colors) {
      if (this.colors[key].bg == background) {
        colorName = key;
      }
    }

    return colorName;
  }

  setFontFamily() {
    if (this.textEle.style.fontFamily) {
      this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
    }
  }

  changeBackground(color) {
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    this.textEle.style.color = this.colors[color].fg;
  }

  changeFontSize(direction) {
    this.textEle.style.fontSize = direction;
  }

  changeFontFamily() {
    if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
  }

  click() {
      this.navCtrl.push(AvisosPage);
  }
}




/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
@ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  navToTestemunhos() {
      this.navCtrl.push(TestemunhosPage);
  }

  navToPedido() {
      this.navCtrl.push(PedidoOracaoPage);
  }

  navToMinisterio() {
      this.navCtrl.push(MinisteriosPage);
  }

  navToLogin() {
      this.navCtrl.push(LoginPage);
  }

  popOver(ev) {
      let popover = this.popoverCtrl.create(PopoverPage, {
     contentEle: this.content.nativeElement,
     textEle: this.text.nativeElement
   });

   popover.present({
     ev: ev
   });
    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present();
  }
}
