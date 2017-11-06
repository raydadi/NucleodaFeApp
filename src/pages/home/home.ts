import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { TestemunhosPage } from '../testemunhos/testemunhos';
import { PedidoOracaoPage } from '../pedido-oracao/pedido-oracao';
import { MinisteriosPage } from '../ministerios/ministerios';
import { PopoverNotificationPage } from '../menu-pages/popover-notification/popover-notification';
import { LoginPage } from '../menu-pages/login/login';
import { AvisosPage } from '../avisos/avisos';
import { AwardsJovensPage } from '../awards/awards-jovens/awards-jovens';
import { AcampamentoJovensPage } from '../acampamentos/acampamento-jovens/acampamento-jovens';
import { CultoOnlinePage } from '../culto-online/culto-online';
import { PequenoNucleoPage } from '../pequeno-nucleo/pequeno-nucleo';
import { InscricoesPage } from '../inscricoes/inscricoes';
import introJs from 'intro.js/intro.js';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    // @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

    acampamento: Icone;
    awards: Icone;

    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
        this.acampamento = new Icone();
        this.awards = new Icone();
    }

    intro() {
        let intro = introJs.introJs();
        // Initialize steps

        intro.setOptions({
            'showBullets': false,
            'skipLabel': 'Pular',
            'nextLabel': 'Ok',
            'doneLabel': 'Fechar',
            'hidePrev': true,
            'hideNext': true,
            'showStepNumbers': false,
            steps: [
                {
                    intro: "<h2>BEM-VINDO</h2><p style=\"color: rgba(0,0,0,.5);\">Iremos te guiar pelas principais funcionalidades dessa nova versão, ok?</p>"
                },
                {
                    element: document.querySelector('#step1'),
                    intro: "<h2>PEQUENOS NÚCLEOS</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>",
                    position: "right"
                },
                {
                    element: document.querySelector('#step2'),
                    intro: "<h2>BEM-VINDO</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>",
                    position: 'left'
                },
                {
                    element: document.querySelector('#step3'),
                    intro: "<h2>BEM-VINDO</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>",
                    position: "right"
                },
                {
                    element: document.querySelector('#step4'),
                    intro: "<h2>BEM-VINDO</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>",
                    position: "left"
                },
                {
                    element: document.querySelector('#step5'),
                    intro: "<h2>BEM-VINDO</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>",
                    position: "right"
                },
                {
                    element: document.querySelector('#step6'),
                    intro: "<h2>BEM-VINDO</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>",
                    position: "left"
                },
                {
                    element: document.querySelector('#step7'),
                    intro: "<h2>BEM-VINDO</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>"
                },
                {
                    element: document.querySelector('#step8'),
                    intro: "<h2>BEM-VINDO</h2><p>Aqui você encontra todo os pequenos núcleos da igreja!</p>"
                }
            ]
        });
        intro.start();
    }

    ionViewDidLoad() {
        this.intro();


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

    navToAvisos() {
        this.navCtrl.push(AvisosPage);
    }

    navToAwards() {
        this.navCtrl.push(AwardsJovensPage);
    }

    navToAcampamento() {
        this.navCtrl.push(AcampamentoJovensPage);
    }

    navToCultoOnline() {
        this.navCtrl.push(CultoOnlinePage);
    }

    navToPequenoNucleo() {
        this.navCtrl.push(PequenoNucleoPage);
    }

    navToInscricoes() {
        this.navCtrl.push(InscricoesPage);
    }

    popOver(ev) {
        let popover = this.popoverCtrl.create(PopoverNotificationPage, {
            //  contentEle: this.content.nativeElement,
            //  textEle: this.text.nativeElement
        });

        popover.present({
            ev: ev
        });
        // let popover = this.popoverCtrl.create(PopoverPage);
        // popover.present();
    }
}

export class Icone {
    nome: string;
    imgUrl: string;
    visivel: boolean;
}
