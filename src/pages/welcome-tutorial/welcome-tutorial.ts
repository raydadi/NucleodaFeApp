import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-welcome-tutorial',
  templateUrl: 'welcome-tutorial.html',
})
export class WelcomeTutorialPage {

  slides = [
    {
      title: "Pequeno Núcleo!",
      description: "Nessa versão do aplicativo você pode consultar todas os pequenos núcleos ativos na igreja e filtrá-los por idade, nome e região.",
      image: "assets/ministerios/acolhimento.jpg",
    },
    {
      title: "Testemunhos",
      description: "Agora todos os testemunhos que são enviados para o aplicativo passam por um filtro e depois são publicados em nosso site.",
      image: "assets/ministerios/acolhimento.jpg",
    },
    {
      title: "Pedido de Oração",
      description: "Os pedidos de oração que são enviados pelo aplicativo agora são automaticamente direcionados para a liderança da intercessão que além de orar por você, poderá entrar em contato caso você deseje.",
      image: "assets/ministerios/acolhimento.jpg",
    },
    {
      title: "Como Chegar",
      description: "Pelo menu lateral é possível acessar ao mapa e telefone de todas as igrejas do Núcleo da Fé além da chácara da igreja",
      image: "assets/ministerios/acolhimento.jpg",
    },
    {
      title: "Avisos",
      description: "Todos os avisos da igreja agora serão notificados no sino superior.",
      image: "assets/ministerios/acolhimento.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage) {
  }

  skip() {
    this.nativeStorage.setItem('welcome', {})
      .then(() => console.log('Stored item!'),
      error => console.error('Error storing item', error
      ));
    this.navCtrl.setRoot(HomePage);
  }
}
